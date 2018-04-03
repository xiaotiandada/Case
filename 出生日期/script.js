var card = document.getElementById('card')
var yead = document.getElementById('yead')
var xb = document.getElementById('xb')
var age = document.getElementById('age')


// 缺兼容
card.addEventListener('blur',function(){
    var num = card.value
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\dX|x)$)/g
    if(reg.test(num) === false){
        console.log('身份证不正确')
        // card.value=''
        yead.value=''
        xb.value=''
        age.value=''
        return false
    }else{
        if(num.length == 15){
            alert('暂时不支持十五位验证')
            return false
        }
        fslice(num)
        fxb(num)
        fage(num)
    }
    
})

function fslice(num){
    var nums = num.substring(6,14)
    var reg = /(.{4})(.{2})/g
    yead.value = nums.replace(reg,'$1-$2-')
    
}

function fxb(num){
    if(parseInt(num.substring(16,17)) % 2 == 1){
        xb.value = '男'
    }else{
        xb.value = '女'        
    }
}
function fage(num){
    var myDate = new Date()
    var month = myDate.getMonth() + 1
    var day = myDate.getDate()
    var ages = myDate.getFullYear() - num.substring(6, 10) - 1
    if( (num.substring(10,12)<month || num.substring(10,12) ==  month) && (num.substring(12,14) <= day) ){
        ages++
    }
    age.value = ages
}

// 430703199904103255