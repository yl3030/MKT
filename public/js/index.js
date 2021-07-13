var Pswiper = new Swiper("#introduce", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
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
});

var ACarousel = $("#activity-slider");
var carousel = new bootstrap.Carousel(ACarousel, {
  interval: 2000,
  wrap: false
})

var SCarousel = $("#social-slider");
var carousel = new bootstrap.Carousel(SCarousel, {
  interval: 2000,
  wrap: false
})


$(".entrance").delay(3000).fadeOut(300);