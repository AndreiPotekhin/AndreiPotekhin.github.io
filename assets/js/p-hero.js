import anime from './animejs/lib/anime.es.js';

let stroke = 10;

var lineAnimation = anime({
    targets: ".hero-section-2 .line",
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
