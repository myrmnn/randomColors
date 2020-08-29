let colors = ["red", "blue", "purple", "yellow"];

const circle = document.querySelectorAll('.circle');
circle.forEach(el => {
    el.addEventListener('click', function(){
        let rgb = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        el.style.background = rgb;
    })
})