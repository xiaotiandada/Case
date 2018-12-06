```js
// 得到url 转json
var getUrlData = function () {
    var url = window.location.search;
    var data = '';
    var urlObj = Object.create(null);
    if (url.indexOf('?') !== -1) {
        data = url.substr(url.indexOf('?') + 1);
    }
    else {
        return false;
    }
    var splitStr = data.split('&');
    for (var i = 0; i < splitStr.length; i++) {
        urlObj[splitStr[i].split("=")[0]] = decodeURI(splitStr[i].split("=")[1]);
    }
    return urlObj;
};
// json转url字符串
function objTosStr(params) {
    var str = '';
    var i = 0;
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            if (i === 0) {
                str += key + "=" + params[key];
                i++;
            }
            else {
                str += "&" + key + "=" + params[key];
            }
        }
    }
    return str;
}
/**
 * 转跳地址
 * @param {string} url
 * @param {object} params
 */
function goHref(url, params) {
    if (params === void 0) { params = {}; }
    var str = objTosStr(params);
    if (str === '') {
        window.location.href = url;
    }
    else {
        window.location.href = url + '?' + str;
    }
}

// 提示信息
function setMessage(text) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var timer = null;
    clearTimeout(timer);
    function hide() {
        var str = '<div id="code-message" class="code-message">' + text + '</div>';
        $('#code-message').remove();
        $('body').append(str);
        timer = setTimeout(function () {
            $('#code-message').remove();
        }, time);
    }
    return hide();
}
```

## 判断是否在可视区域内
> 需优化

``` css

.animation.active {
  animation: slideInUp 600ms ease-in-out both;
}

.animation.remove,
.head-text.animation.remove,
.title.animation.remove {
  animation: slideInDown 600ms ease-in-out both;
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 10%, 0);
    visibility: visible;
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInDown {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 10%, 0);
    visibility: visible;
    opacity: 0;
  }
}
```

```js
var activeAnimation = document.querySelectorAll('.animation')
var len = activeAnimation.length
window.addEventListener('scroll', function () {
  isToggleAnimation(activeAnimation, len)
})

function isToggleAnimation(activeAnimation, len) {
  while (len--) {
    var boo = isElementInViewport(activeAnimation[len])
    if (boo) {
      if (activeAnimation[len].classList.contains('remove')) {
        activeAnimation[len].classList.remove('remove')
      }
      activeAnimation[len].classList.add('active')
    } else {
      activeAnimation[len].classList.remove('active')
      activeAnimation[len].classList.add('remove')
    }
  }
}
isToggleAnimation(activeAnimation, len)


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  // console.log(rect)
  return (
    (rect.top + rect.height) >= 0 &&
    (rect.left + rect.width) >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
```