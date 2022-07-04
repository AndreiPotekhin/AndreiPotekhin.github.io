// import anime from './animejs/lib/anime.es.js';
//
// let observer_imgs_parallax;
// let Element_imgs_parallax;
//
// let prevRatio = 0.0;
// let options_parallax = {
//     root: null,
//     rootMargin: '0px',
//     threshold: buildThresholdList() //se parallax
// };
//
// // Set things up
// Element_imgs_parallax = document.querySelector('.parallax-trigger');
// initObserver_parallax();
//
// //////////////////////////////////////////////////////////////////////////////
//
// function initObserver_parallax() {
//     observer_imgs_parallax = new IntersectionObserver(callback_imgs_parallax, options_parallax);
//     observer_imgs_parallax.observe(Element_imgs_parallax);
// }
//
// /////////////////////////////////////////////////////////////////////////////
//
// function buildThresholdList() {
//     let thresholds = [];
//     let numSteps = 200;
//     for (let i=1.0; i<=numSteps; i++) {
//         let ratio = i/numSteps;
//         thresholds.push(ratio);
//     }
//     thresholds.push(0);
//     return thresholds;
// }
//
// /////////////////////////////////////////////////////////////////////////////
//
//
// var animazione_parallax = anime ({
//     targets: '.card-media img',
//     translateY: ['15%','-15%'],
//     scale: ['1','1.2'],
//     easing: 'easeInOutSine',
//     duration: 2000,
//     autoplay: false
// });
//
//
// ////////////////////////////////////////////////////////////////////////////
//
//
// //animazione parallax
// function callback_imgs_parallax (entries, observer_imgs_parallax) {
//     entries.forEach((entry) => {
//         if(entry.boundingClientRect.top < 0){ //osservazione elemento da top
//
//             animazione_parallax.seek(animazione_parallax.duration * (entry.intersectionRatio)); //parallax
//
//         }else{ animazione_parallax.seek(1000);} //posizione dopo il passaggio
//         prevRatio = entry.intersectionRatio; //rimuove se non parallax
//     });
// }