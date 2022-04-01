
// 获取导航栏
var nav = document.querySelector('.nav')
// 获取所有图标
var nav_i = document.querySelectorAll('i')
// 获取所有导航栏文字
var nav_p = document.querySelectorAll('header .nav .nav_right ul li p')
var nav_b = document.querySelector('b')
var plate_you = document.querySelector('main .bigContainer .right')
window.onload = function () {
    var top1 = 0;
    window.onscroll = function () {
        var top2 = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(top2);
        if (top2 > top1) {
            nav.style = "  position:fixed; top:-60px;left:0; transition:0.3s;"
        } else {
            nav.style = "  position:fixed; top:0;left:0; transition:0.5s; background-color: rgba(255, 255, 255, 0.8);"
            nav_i.forEach(e => {
                e.style = 'color:#4c4948'
            });
            nav_p.forEach(e => {
                e.style = 'color:#4c4948'
            });
            nav_b.style = 'color:#4c4948'

        }
        if (top2 == 0) {
            nav.style = 'top:0;background-color: rgba(255, 255, 255, 0);transition:0.3s;'
            nav_i.forEach(e => {
                e.style = 'color:#eeeeee'
            });
            nav_p.forEach(e => {
                e.style = 'color:#eeeeee'
            });
            nav_b.style = 'color:#eeeeee'
        }
        top1 = top2;

        // 定位
        // 滚动条定位
        if (top2 >= 1355) {
            plate_you.style.position = 'fixed'
            plate_you.style.top = '-350px'
            plate_you.style.right = '331px'
        }

        if (top2 <= 1355) {
            plate_you.style.position = 'static'
        }


    }
}

// 箭头跳动
var arrows = document.querySelector('#arrows')
var k = 0
setInterval(function () {
    if (k == 0) {
        arrows.style.paddingTop = '520px'
        arrows.style.transition = '1s'
        arrows.style.opacity = '0.3'
        k = 1
    } else {
        arrows.style.paddingTop = '500px'
        arrows.style.transition = '1s'
        arrows.style.opacity = '1'
        k = 0
    }
}, 700)



// 遮罩层
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
setTimeout(function () {
    box1.style.marginLeft = '-956px'
    box1.style.transition = '0.3s'
    box2.style.marginLeft = '956px'
    box2.style.transition = '0.3s'
}, 150)
// 延迟加载nav
setTimeout(function () {
    nav.style.top = '0px'
    nav.style.transition = '0.3s'
}, 300)
// 延迟加载logo
var logoP = document.querySelector('.logoP')
setTimeout(function () {
    logoP.style.fontSize = '2.85em'
    logoP.style.transition = '0.7s'
}, 100)



// nav获取小蓝条
var blue1 = document.querySelectorAll('header .nav .nav_right ul li .whspan')[0]
var blue2 = document.querySelectorAll('header .nav .nav_right ul li .whspan')[1]
var blue3 = document.querySelectorAll('header .nav .nav_right ul li .whspan')[2]
// nav导航栏箭头方向过渡
var whspan1 = document.querySelectorAll('header .nav .nav_right ul li #i')[0]
var li1 = document.querySelectorAll('header .nav .nav_right ul li')[3]

li1.addEventListener('mouseover', function () {
    whspan1.style.transform = 'rotate(180deg)'
    whspan1.style.transition = 'all 0.3s ease'
    blue1.style.width = '60px'
    blue1.style.transition = 'all 0.3s ease'
})
li1.addEventListener('mouseout', function () {
    whspan1.style.transform = 'rotate(0deg)'
    whspan1.style.transition = 'all 0.3s ease'
    blue1.style.width = '0px'
    blue1.style.transition = 'all 0.3s ease'
})


var whspan2 = document.querySelectorAll('header .nav .nav_right ul li #i')[1]
var li2 = document.querySelectorAll('header .nav .nav_right ul li')[4]

li2.addEventListener('mouseover', function () {
    whspan2.style.transform = 'rotate(180deg)'
    whspan2.style.transition = 'all 0.3s ease'
    blue2.style.width = '60px'
    blue2.style.transition = 'all 0.3s ease'
})
li2.addEventListener('mouseout', function () {
    whspan2.style.transform = 'rotate(0deg)'
    whspan2.style.transition = 'all 0.3s ease'
    blue2.style.width = '00px'
    blue2.style.transition = 'all 0.3s ease'
})


var whspan3 = document.querySelectorAll('header .nav .nav_right ul li #i')[2]
var li3 = document.querySelectorAll('header .nav .nav_right ul li')[5]

li3.addEventListener('mouseover', function () {
    whspan3.style.transform = 'rotate(180deg)'
    whspan3.style.transition = 'all 0.3s ease'
    blue3.style.width = '60px'
    blue3.style.transition = 'all 0.3s ease'
})
li3.addEventListener('mouseout', function () {
    whspan3.style.transform = 'rotate(0deg)'
    whspan3.style.transition = 'all 0.3s ease'
    blue3.style.width = '0px'
    blue3.style.transition = 'all 0.3s ease'
})


// 获取二级列表1
var inventory = document.querySelector('.inventory')

li1.addEventListener('mouseover', function () {
    inventory.style.display = 'block'
})
li1.addEventListener('mouseout', function () {
    inventory.style.display = 'none'
})
inventory.addEventListener('mouseover', function () {
    inventory.style.display = 'block'
    whspan1.style.transform = 'rotate(180deg)'
    blue1.style.width = '60px'
    blue1.style.transition = 'all 0.3s ease'

})
inventory.addEventListener('mouseout', function () {
    inventory.style.display = 'none'
    whspan1.style.transform = 'rotate(0deg)'
    blue1.style.width = '0px'
    blue1.style.transition = 'all 0.3s ease'
})

// 获取二级列表2
var study = document.querySelector('.study')

li2.addEventListener('mouseover', function () {
    study.style.display = 'block'
})
li2.addEventListener('mouseout', function () {
    study.style.display = 'none'
})
study.addEventListener('mouseover', function () {
    study.style.display = 'block'
    whspan2.style.transform = 'rotate(180deg)'
    blue2.style.width = '60px'
    blue2.style.transition = 'all 0.3s ease'

})
study.addEventListener('mouseout', function () {
    study.style.display = 'none'
    whspan2.style.transform = 'rotate(0deg)'
    blue2.style.width = '0px'
    blue2.style.transition = 'all 0.3s ease'
})
// 获取二级列表3
var game = document.querySelector('.game')

li3.addEventListener('mouseover', function () {
    game.style.display = 'block'
})
li3.addEventListener('mouseout', function () {
    game.style.display = 'none'
})
game.addEventListener('mouseover', function () {
    game.style.display = 'block'
    whspan3.style.transform = 'rotate(180deg)'
    blue3.style.width = '60px'
    blue3.style.transition = 'all 0.3s ease'

})
game.addEventListener('mouseout', function () {
    game.style.display = 'none'
    whspan3.style.transform = 'rotate(0deg)'
    blue3.style.width = '0px'
    blue3.style.transition = 'all 0.3s ease'
})



