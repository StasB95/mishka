// dayElement = document.querySelector('.preview-background-2');

// document.addEventListener('mousemove', (e) => {
//   dayElement.style.clipPath = `circle(200px at ${e.x / window.innerWidth * 100}% ${e.y / window.innerHeight * 100}%)`;
// });



// var navMain = document.querySelector('.main-nav');
// var navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})