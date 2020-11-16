let btnRight = document.querySelector('.btn_right'),
    btnLeft = document.querySelector('.btn_left'),
    leftBar = document.querySelector('.h_1st_place');


    btnRight.addEventListener('click', function(){
    leftBar.style.left = '0%';
    btnRight.style.display = 'none';
    btnLeft.style.left = '30%';
})
    btnLeft.addEventListener('click', function(){
    leftBar.style.left = '-100%';
    btnRight.style.display = 'block';
    btnLeft.style.left = '-100%';
});

let btnRight2 = document.querySelector('.btn_right2'),
    btnLeft2 = document.querySelector('.btn_left2'),
    rightBar2 = document.querySelector('.h_2sd_place');


    btnLeft2.addEventListener('click', function(){
    rightBar2.style.left = '36%';
    btnLeft2.style.display = 'none';
    btnRight2.style.right = '29.5%';
})
    btnRight2.addEventListener('click', function(){
    rightBar2.style.left = ' 65%';
    btnLeft2.style.display = 'block';
    btnRight2.style.right = '-100%';
});

let btnRight3 = document.querySelector('.btn_right3'),
    btnLeft3 = document.querySelector('.btn_left3'),
    leftBar3 = document.querySelector('.h_3th_place');


    btnRight3.addEventListener('click', function(){
    leftBar3.style.left = '0%';
    btnRight3.style.display = 'none';
    btnLeft3.style.left = '30%';
})
    btnLeft3.addEventListener('click', function(){
    leftBar3.style.left = '-100%';
    btnRight3.style.display = 'block';
    btnLeft3.style.left = '-100%';
});

document.addEventListener('DOMContentLoaded', function(){
    var trigger = new ScrollTrigger({
        offset : {
        x: 0,
        y: 250
        },
    });
});
