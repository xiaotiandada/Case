var bodymovinLayer = document.getElementsByClassName('bodymovin')[0]
var animDate = {
    container: bodymovinLayer,
    renderer: 'svg',
    prerender:true,
    loop: false,
    autoplay: false,
    path: bodymovinLayer.getAttribute('data-movpath')
  }  
anim = lottie.loadAnimation(animDate)

$('.bodymovin').on('mouseenter',function(){
  anim.play()
})

$('.bodymovin').on('mouseleave',function(e){
  anim.stop()
})

