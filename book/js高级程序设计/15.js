{
  var canvasContent = document.querySelector('#canvasContent')
  var canvasContent1 = canvasContent.getContext('2d')

  var imgUrl = canvasContent.toDataUrl()
  console.log(imgUrl)
}