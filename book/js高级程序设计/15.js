{
  var canvasContent = document.querySelector('#canvasContent')
  if (canvasContent.getContext) {
    var context = canvasContent.getContext('2d')
    context.fillStyle = '#ff0000'
    context.fillRect(10, 10, 50, 50)
    context.strokeStyle = '#ff0'
    context.strokeRect(10, 10, 50, 50)

    context.fillStyle = 'rgba(0,0,255,0.58)'
    context.fillRect(30, 30, 50, 50)
    context.strokeStyle = '#000'
    context.strokeRect(30, 30, 50, 50)

    context.clearRect(40, 40, 10, 10)
  }
}