'use strict';

let selected_ = null;

class FancyTabs extends HTMLElement {
  constructor() {
    super()

    const innerHTML = `<style>
      :host {
        display: inline-block;
        width: 650px;
        font-family: 'Roboto Slab';
        contain: content;
      }
      :host([background]) {
        background: var(--background-color, #9E9E9E);
        border-radius: 10px;
        padding: 10px;
      }
      #panels {
        box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
        background: white;
        border-radius: 3px;
        padding: 16px;
        height: 250px;
        overflow: auto;
      }
      #tabs {
        display: inline-flex;
        -webkit-user-select: none;
        user-select: none;
      }
      #tabs slot {
        display: inline-flex; /* Safari bug. Treats <slot> as a parent */
      }
      /* Safari does not support #id prefixes on ::slotted
          See https://bugs.webkit.org/show_bug.cgi?id=160538 */
      #tabs ::slotted(*) {
        font: 400 16px/22px 'Roboto';
        padding: 16px 8px;
        margin: 0;
        text-align: center;
        width: 100px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background: linear-gradient(#fafafa, #eee);
        border: none; /* if the user users a <button> */
      }
      #tabs ::slotted([aria-selected="true"]) {
        font-weight: 600;
        background: white;
        box-shadow: none;
      }
      #tabs ::slotted(:focus) {
        z-index: 1; /* make sure focus ring doesn't get buried */
      }
      #panels ::slotted([aria-hidden="true"]) {
        display: none;
      }
    </style>
    <div id="tabs">
      <slot id="tabsSlot" name="title"></slot>
    </div>
    <div id="panels">
      <slot id="panelsSlot"></slot>
    </div>`;
    // 设置 shadowRoot
    let shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = innerHTML
  }

  // 得到属性
  get selected() {
    return selected_;
  }
  // 设置属性
  set selected(idx) {
    selected_ = idx;
    this._selectTab(idx);
    this.setAttribute('selected', idx);
  }

  connectedCallback() {
    this.setAttribute('role', 'tablist')
    const tabsSlot = this.shadowRoot.querySelector('#tabsSlot')
    const panelsSlot = this.shadowRoot.querySelector('#panelsSlot')

    // slot.assignedNodes() 可以找出哪些元素是由插槽渲染的。
    // {flatten: true} 选项会返回插槽的默认内容(若没有分发任何节点)。
    this.tabs = tabsSlot.assignedNodes({flatten: true});
    this.panels = panelsSlot.assignedNodes({flatten: true}).filter(el => {
      return el.nodeType === Node.ELEMENT_NODE;
    });

    for (let [i, panel] of this.panels.entries()) {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', 0);
    }

    this._boundOnTitleClick = this._onTitleClick.bind(this);
    tabsSlot.addEventListener('click', this._boundOnTitleClick);

    this.selected = this._findFirstSelectedTab() || 0;

  }
  // 移除事件
  disconnectedCallback() {
    const tabsSlot = this.shadowRoot.querySelector('#tabsSlot');
    tabsSlot.removeEventListener('click', this._boundOnTitleClick);
  }

  // 单击事件
  _onTitleClick(e) {
    if (e.target.slot === 'title') {
      // set
      this.selected = this.tabs.indexOf(e.target);
      e.target.focus();
    }
  }
  // 设置 第一个select tab 为 selected
  _findFirstSelectedTab() {
    let selectedIdx;
    for (let [i, tab] of this.tabs.entries()) {
      tab.setAttribute('role', 'tab');
      if (tab.hasAttribute('selected')) {
        selectedIdx = i;
      }
    }
    return selectedIdx;
  }

  // 选择Tab
  _selectTab(idx = null) {
    for (let i = 0, tab; tab = this.tabs[i]; ++i) {
      let select = i === idx;
      tab.setAttribute('tabindex', select ? 0 : -1);
      tab.setAttribute('aria-selected', select); // 通过自定义属性显示或者隐藏
      this.panels[i].setAttribute('aria-hidden', !select); // 通过自定义属性显示或者隐藏
    }
  }


}

customElements.define('fancy-tabs', FancyTabs)