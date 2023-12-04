


document.addEventListener('scroll', function () {
    console.log('scroll event fired')
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (scrollPosition > 686) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
});

console.log('Document body height:', document.body.clientHeight);

const videoBanner = document.querySelector('.video-banner');
videoBanner.classList.toggle('force-redraw'); /*added this to fix video fitting vertical issue- did a browser redraw to fix rendering issue with blank space above video-banner*/