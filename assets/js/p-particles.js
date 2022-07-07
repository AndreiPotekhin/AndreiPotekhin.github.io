import anime from './animejs/lib/anime.es.js';

let particles = document.querySelectorAll('.particle')

const idle = anime({
    targets: particles,
    rotate: 360,
    easing: "linear",
    duration: anime.stagger(15000, {from: 'center'}),
    autoplay: true,
    loop: true
});

idle.play();