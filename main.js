import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './layout/swiper.js';


console.log("Hello world!");
const swiper = new Swiper(".mySwiper", {
    speed: 5000,
    slidesPerView: "auto",
    allowTouchMove: false,
    loop: true,
    autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
  });