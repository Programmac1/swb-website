


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

/*const videoBanner = document.querySelector('.video-banner');
videoBanner.classList.toggle('force-redraw'); /*added this to fix video fitting vertical issue- did a browser redraw to fix rendering issue with blank space above video-banner after scrollbar code was added*/

//the above code regarding the scrollbar breaks the parallax effect// its because parallax messes with the scrolling height dimensions which need to be defined and used to make the scrollbar change class depending on the scrollY property

/*document.addEventListener("DOMContentLoaded", function () {
    let prevScrollPosition = window.pageYOffset;
    const navbar = document.querySelector('.navbar-wrap');

window.onscroll = function () {
    const currentScrollPosition = window.pageYOffset;
    if(prevScrollPosition > currentScrollPosition){
        navbar.style.top = "0";
    }else{
        navbar.style.top = "-50px";
    }
    prevScrollPosition = currentScrollPosition;
}
});*/

window.onload = function() {
    var videoBanner = document.querySelector('.video-banner');
    videoBanner.style.transform = 'translateZ(0)';
};

//this function fixed the initial fullscreen video-banner issue//
