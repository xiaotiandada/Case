let sbtn = document.getElementById('sbtn')
let lbtn = document.getElementById('lbtn')
let scene1 = document.getElementById('scene1')
let scene2 = document.getElementById('scene2')
let scene3 = document.getElementById('scene3')
let t0 = document.getElementById('t0')
let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')
let t3 = document.getElementById('t3')
let t4 = document.getElementById('t4')
let t5 = document.getElementById('t5')
let t6 = document.getElementById('t6')
let t7 = document.getElementById('t7')
let ercode = document.getElementById('ercode')
let heart = document.getElementById('heart')
let music = document.getElementById('music')
let musicoff = document.getElementById('musicoff')
let musicon = document.getElementById('musicon')

let p = [[152,139],[160,115],[160,140],[160,166],[160,192],[160,218],[160,243],[160,269],[160,295],[123,160],[94,181],[112,167],[110,149],[133,152],[160,126],[160,152],[160,178],[160,204],[160,229],[160,255],[160,283],[143,145],[103,174],[110,160],[168,139],[198,160],[227,182],[208,167],[211,149],[188,153],[178,146],[217,174],[210,160],[152,166],[123,187],[94,209],[112,194],[133,180],[143,173],[103,201],[168,167],[198,188],[227,209],[208,195],[188,180],[178,173],[217,202],[152,194],[123,215],[94,237],[112,222],[133,208],[143,201],[103,229],[168,195],[198,216],[227,237],[208,223],[188,208],[178,201],[217,230],[152,221],[123,242],[94,264],[112,249],[133,235],[143,228],[103,256],[168,222],[198,243],[227,264],[208,250],[188,235],[178,228],[217,257],[152,250],[123,271],[112,278],[133,264],[143,257],[103,285],[168,251],[198,272],[208,279],[188,264],[178,257],[217,286],[110,203],[110,234],[211,204],[210,235],[110,213],[110,244],[211,214],[210,245],[128,97],[116,102],[103,109],[91,116],[81,125],[72,134],[65,146],[58,156],[52,169],[48,181],[45,194],[43,208],[43,220],[45,234],[49,246],[53,259],[60,271],[68,281],[76,292],[86,301],[98,310],[110,317],[125,322],[137,326],[151,326],[165,326],[178,326],[191,322],[205,318],[219,312],[231,304],[241,295],[251,285],[259,274],[266,261],[271,249],[274,237],[277,223],[277,209],[276,196],[273,184],[270,171],[264,160],[258,148],[251,137],[241,127],[231,118],[142,94],[154,94],[166,94],[179,94],[191,98],[204,102],[217,109]];
let drawMode = false
let mi = 0
let pl = p.length

window.onload = function () {
    document.getElementById('loading').style.display = 'none'
    showScene1()
}

function showScene1() {
    TweenMax.to(heart, 1, {
        opacity: 1
    })
    TweenMax.to(heart, .5, {
        scaleX: 1.2,
        scaleY: 1.2,
        repeat: -1,
        yoyo: true
    })
    TweenMax.to(t0, 1, {
        top: "40%",
        opacity: 1,
        delay: .3
    })
    TweenMax.to(t1, 1, {
        top: "57%",
        opacity: 1,
        delay: .5
    })
    TweenMax.to(t2, 1, {
        top: "65%",
        opacity: 1,
        delay: 1
    })
    TweenMax.to(sbtn, 1, {
        top: "75%",
        opacity: 1,
        delay: 1.4
    })
}


musicoff.onclick = function () {
    musicon.className = musicon.className ? "" : "hidden"
    musicoff.className = musicoff.className ? "" : 'hidden'
    music.play()
}
musicon.onclick = function () {
    musicon.className = musicon.className ? "" : "hidden"
    musicoff.className = musicoff.className ? "" : 'hidden'
    music.pause()
}

p.sort(function () {
    return Math.random() > 0.5 ? -1 : 1
})

function showScene2() {
    TweenMax.to(scene1, .5, {
        left: "-100%"
    })
    TweenMax.to(scene2, .5, {
        left: 0
    })
    TweenMax.to(t3, 1, {
        opacity: 1
    })
    drawMode = true
}
sbtn.onclick = showScene2
document.addEventListener('touchstart', getPosition)

function getPosition(ev) {
    if (drawMode) { //只有在绘图模式下才开始绘制圆点
        ev = ev || window.event 
        ev.preventDefault()

        //为了使图案在水平方向上居中，计算出当前屏幕宽度与设计宽度（320像素）之间的差异值，以作为后续的位移基准值
        let xbias = (window.innerWidth - 320) / 2
        let touch = ev.touches[0]   //获取第一个触点的信息
        let point = { 
            x: 0,
            y: 0
        }  //创建一个对象来储存触点坐标
        point.x = Number(touch.pageX) //记录触点X坐标
        point.y = Number(touch.pageY) //记录触点Y坐标
        if (mi < pl) {
            let objdiv = document.createElement('div')  
            let objname = 's_' + mi  //设置name属性  
            objdiv.id = objname
            objdiv.style.position = 'absolute'
            objdiv.style.display = 'block'
            objdiv.style.top = point.y + 'px'
            objdiv.style.left = point.x + 'px'
            objdiv.style.background = '#fff'
            objdiv.style.borderRadius = '50%'
            objdiv.style.width = '12px'
            objdiv.style.height = '12px'
            objdiv.style.zIndex = mi
            objdiv.innerHTML = ' '
            scene2.appendChild(objdiv)
            TweenMax.to(objdiv, 1, {
                top: p[mi][1],
                left: p[mi][0] + xbias
            })  //创建从触摸点到目标坐标点的位移动画
            mi++
        } else {
            drawMode = false //圆点全部显示完毕后，关闭绘图模式
            TweenMax.to(lbtn, .8, {
                opacity: 1,
                top: '80%'
            }) //显示结束按钮
        }
    }
    return false
}

document.addEventListener('touchmove', function (ev) {
    ev = ev || window.event
    ev.preventDefault()
})

function showScene3() {
    TweenMax.to(scene2, .5, {
        left: '-100%'
    })
    TweenMax.to(scene3, .5, {
        left: 0
    })
    TweenMax.to(t4, 1, {
        top: '10%',
        opacity: 1,
        delay: .7
    })
    TweenMax.to(t5, 1, {
        top: '23%',
        opacity: 1,
        delay: .9
    })
    TweenMax.to(t6, 1, {
        top: '30%',
        opacity: 1,
        delay: 1.3
    })
    TweenMax.to(t7, 1, {
        top: '85%',
        opacity: 1,
        delay: .2
    })
    TweenMax.to(ercode, 1, {
        top: '45%',
        opacity: 1,
        delay: 1.8
    })
}
lbtn.onclick = showScene3