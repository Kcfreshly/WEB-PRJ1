
const openBtn = document.querySelector('.open')
const el = document.querySelector('.menu');
const navbar = document.querySelector('.navbar')
const closeBtn = document.querySelector('.close')

openBtn.addEventListener('click', ()=>{
    function css(el, styles) {
        for (var property in styles)
            el.style[property] = styles[property];
    } 

    css(el, {display: 'block'});
    css(openBtn, {display: 'none'});
    css(closeBtn, {display: 'block'});
});

closeBtn.addEventListener('click', ()=>{
    function css(el, styles) {
        for (var property in styles)
            el.style[property] = styles[property];
    } 

    css(el, {display: 'none'});
    css(openBtn, {display: 'block'});
    css(closeBtn, {display: 'none'});
});






