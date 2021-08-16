var Pswiper = new Swiper("#introduce", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  // pagination: {
  //   el: "#banner-pag",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".Inext",
    prevEl: ".Iprev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    524: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
    1800: {
      slidesPerView: 6,
    }
  }
});

var ACarousel = $("#activity-slider");
var A_carousel = new bootstrap.Carousel(ACarousel, {
  interval: 2000,
  wrap: false
})

var SCarousel = $("#social-slider");
var S_carousel = new bootstrap.Carousel(SCarousel, {
  interval: 2000,
  wrap: false
})


