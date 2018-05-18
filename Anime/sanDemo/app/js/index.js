$(function () {
  var resourceCards = document.querySelectorAll('.resource-block')
  var facilityCards = document.querySelectorAll('.facility-block')
  var len = resourceCards.length

  setBodymovin = function (cards, len) {
    while (len--) {
      var bodymovinLayer = cards[len].getElementsByClassName('bodymovin')[0]

      var animData = {
        container: bodymovinLayer,
        renderer: 'svg',
        prerender: true,
        loop: false,
        autoplay: false,
        path: bodymovinLayer.getAttribute('data-movpath')
      }

      anim = lottie.loadAnimation(animData);

      (function (anim) {
        var card = cards[len]

        $(card).on('mouseenter', function () {
          anim.play()
        })

        $(card).on('mouseleave', function (e) {
          anim.stop()
        })
      })(anim)

    }

  }

  setBodymovin(resourceCards, len)
  setBodymovin(facilityCards, len)
})