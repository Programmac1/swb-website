

const menu_button = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const navbar = document.querySelector('.navbar');

menu_button.addEventListener('click', function (){
    menu_button.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    navbar.classList.toggle('mobile');
});
/*document.addEventListener('scroll', function () {
    console.log('scroll event fired')
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (scrollPosition > 686) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
});*/

console.log('Document body height:', document.body.clientHeight);



document.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var videoBanner = document.querySelector(".video-banner");

    function updateParallax() {
        var scrollPosition = window.scrollY;
        videoBanner.style.transform = "translate3d(0, " + scrollPosition * 0.5 + "px, 0)";
    }

    window.addEventListener("scroll", updateParallax);
    window.addEventListener("resize", updateParallax);

    updateParallax(); // Initial call to set parallax effect on page load
});

document.addEventListener('DOMContentLoaded', function(){
    var video = document.querySelector('mobile-video-banner')

    video.addEventListener('loadedmetadata', function(){
        video.play();
        video.removeAttribute('controls'); 
    })
});