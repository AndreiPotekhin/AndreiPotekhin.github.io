import anime from './animejs/lib/anime.es.js';

let stroke = 10;

// Scroll anim

let lineAnimation = anime({
    targets: ".hero-section .line",
    translateY: [-1000, 0],
    translateX: [-450, 0],
    duration: 1500,
    autoplay: false,
    strokeWidth: [200, stroke],
    scale: [3.3, 1],
});

window.onscroll = function (e) {
    lineAnimation.seek(window.pageYOffset * 3);
};

// Floating anim

let ctaShape = document.querySelectorAll('.shape-wrapper');

const getDefaultTranslateXStyle = function(el) {
    let style = window.getComputedStyle(el);
    let matrix = new WebKitCSSMatrix(style.webkitTransform);
    return [matrix.m41, matrix.m41];
};

const updateTranslateYStyle = function(el) {
    let style = window.getComputedStyle(el);
    let matrix = new WebKitCSSMatrix(style.webkitTransform);
    let rate;
    if (el.classList.contains(ctaShape)) {
        rate = 10;
    } else {
        rate = -5;
    }
    return [matrix.m42, matrix.m42+rate];
};

const floating = anime({
    targets: ctaShape,
    translateX: getDefaultTranslateXStyle,
    translateY: updateTranslateYStyle,
    direction: "alternate",
    easing: "easeInOutSine",
    duration: 2000,
    autoplay: true,
    loop: true
});

floating.play();

