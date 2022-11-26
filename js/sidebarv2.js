let menuTrigger = document.getElementById('menuTrigger');
let closeBtn = document.getElementById('closeBtn');
let menuSlide = document.getElementById('menuSlide');

menuTrigger.addEventListener('click', () => {
    menuSlide.classList.add('slideInn');
    menuSlide.classList.remove('slideOut');
})
closeBtn.addEventListener('click', () => {
    menuSlide.classList.remove('slideInn');
    menuSlide.classList.add('slideOut');
})