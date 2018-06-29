var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false)
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler)
        } else {
            element['on' + type] = handler
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false)
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler)
        } else {
            element['on' + type] = null
        }
    },
    getEvent: function (event) {
        return event ? event : window.event
    },
    getTarget: function (event) {
        return event.target || event.srcElement
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault()
        } else {
            event.returnValue = false
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            eval.cancelBubble = true
        }
    }
}


// var list = document.getElementById('myLinks')

// EventUtil.addHandler(list, 'click', function (event) {
//     event = EventUtil.getEvent(event)
//     var target = EventUtil.getTarget(event)

//     switch (target.id) {
//         case 'doSomething':
//             document.title = 'I changed the document is title'
//             break;

//         case 'goSomewhere':
//             location.href = 'http://www.wrox.com'
//             break

//         case 'sayHi':
//             alert('hi')
//             break

//         default:
//             break;
//     }
// })