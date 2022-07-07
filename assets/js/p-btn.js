import anime from './animejs/lib/anime.es.js';

let btnShape = document.querySelectorAll('.btn-shape')

function animateLine(targetLines, stroke, x, y, r) {
    anime ({
        targets: targetLines,
        strokeWidth: stroke,
        translateX: anime.stagger(x, {from: 'center', axis: 'x'}),
        translateY: anime.stagger(y, {from: 'center', axis: 'y'}),
        rotateZ: anime.stagger(r, {from: 'center', axis: 'x'}),
        delay: anime.stagger(5, {from: 'center'}),
    });
}

function animateBtnText(targetBtnText, scale, y) {
    anime({
        targets: targetBtnText,
        scale: scale,
        translateY: y,
    });
}

const getDefaultTranslateXStyle = function(el) {
    let style = window.getComputedStyle(el);
    let matrix = new WebKitCSSMatrix(style.webkitTransform);
    return [matrix.m41, matrix.m41];
};

const updateTranslateYStyle = function(el) {
    let style = window.getComputedStyle(el);
    let matrix = new WebKitCSSMatrix(style.webkitTransform);
    let rate;
    if (el.classList.contains(btnShape)) {
    rate = 20;
    } else {
    rate = -10;
    }
    return [matrix.m42, matrix.m42+rate];
};

const floating = anime({
    targets: btnShape,
    translateX: getDefaultTranslateXStyle,
    translateY: updateTranslateYStyle,
    direction: "alternate",
    easing: "easeInOutSine",
    duration: 3000,
    autoplay: true,
    loop: true
});

$('.btn-wrapper-inner').hover(function() {
    animateLine(this.querySelectorAll('.line'),100, 5, -5, 3);
    animateBtnText(this.querySelector('.btn-text'), 1.1, 10);
    floating.pause();

}, function() {
    animateLine(this.querySelectorAll('.line'),70, 0, 0, 0);
    animateBtnText(this.querySelector('.btn-text'), 1.0, 0);
    floating.play();
});

floating.play();

// Text Button

let textBtnHitbox = document.querySelectorAll('.text-btn-hitbox');
let textBtnShape = document.querySelectorAll('.text-btn-icon-shape');

$(textBtnHitbox).hover(function() {
    let duration = 800;
    let elasticity = 300;

    anime({
        targets: textBtnShape,
        scale: [0, 1],
        rotate: 345,
        duration: duration,
        elasticity: elasticity
    });
}, function() {
    let duration = 800;
    let elasticity = 300;

    anime({
        targets: textBtnShape,
        scale: [1, 0],
        rotate: -15,
        duration: duration,
        elasticity: elasticity
    });
});