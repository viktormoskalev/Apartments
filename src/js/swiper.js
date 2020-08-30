const runswiperonlymobile = () => {

  let g = 1;
  const runSwiper1 = (w) => {
    if (w < 600 & g == 1) {
      g = 0;
      let gridm = document.querySelectorAll(".grid-m");
      for (i = 0; i < gridm.length; i++) {
        gridm[i].style.flexWrap = "nowrap";
      }

      var mySwiper = new Swiper('.swiper1', {
        slidesPerView: 1,
        spaceBetween: 1,
        loop: true,
        autoplay: {
          delay: 1000,
        },
        breakpoints: {
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: true,
            autoplay: {
              delay: 1000,
            },
          },
        },
        breakpoints: {
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: true,
            autoplay: {
              delay: 1000,
            },
          },

          1000: {
            slidesPerView: 3,
            spaceBetween: 15,
            loop: true,
            autoplay: {
              delay: 1000,
            },
          },
        }
      })

      var mySwiper = new Swiper('.swiper2', {
        slidesPerView: 1,
        preventClicksPropagation: false,
        spaceBetween: 1,
        loop: true,
        autoplay: {
          delay: 1000,
        },
        breakpoints: {
          800: {
            slidesPerView: 3,
            spaceBetween: 1,
            loop: true,
            autoplay: {
              delay: 1000,
            },
          },
        }
      })
    }
  }

  runSwiper1(document.documentElement.clientWidth);

  window.addEventListener(`resize`, event => {
    runSwiper1(document.documentElement.clientWidth);
  }, false);

}


runswiperonlymobile();

var mySwiper = new Swiper('.swiper3', {
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {

    1100: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 1,
    }
  }

})