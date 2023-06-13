var Swiper = new Swiper(" .mySwiper" , {
    slidesPerView: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween:30,
    grabCursor:true,
    navigation: {
        nextEL: '.swiper-button-next',
        prevEL:  '.swiper-button-prev'
    },
    breakpoints : {
        991: {
            slidesPerView: 3
        }
    }
});