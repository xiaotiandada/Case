### get 传参 通过 url 获取参数并转换为 json (需要优化)

```js
function getUrlDate() {
  let url = window.location.search;
  let data: string = "";
  let urlObj: object = {};
  if (url.indexOf("?") !== -1) {
    data = url.substr(url.indexOf("?") + 1);
  } else {
    return false;
  }
  let splitStr = data.split("&");
  for (let i = 0; i < splitStr.length; i++) {
    urlObj[splitStr[i].split("=")[0]] = splitStr[i].split("=")[1];
  }
  return urlObj;
}
```
