window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("flexibleHeader").style.padding = "1% 5%";
    document.getElementById("hero-title").style.display= "none";
    document.getElementById("blurHero").style.borderBottomRightRadius = "0px";
    document.getElementById("hero-banner").style.borderBottomRightRadius = "0px";
  } else {
    document.getElementById("flexibleHeader").style.padding = "2% 5% 4% 5%";
    document.getElementById("hero-title").style.display= "block";
    document.getElementById("blurHero").style.borderBottomRightRadius = "20px";
    document.getElementById("hero-banner").style.borderBottomRightRadius = "20px";
  }
}


$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  margin: 5,
  nav: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});