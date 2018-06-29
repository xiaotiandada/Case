function addClass(element,value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " "; //这句代码追加的类名分开
        newClassName += value;
        element.className = newClassName;
    }
}