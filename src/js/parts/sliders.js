import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        const prev = section.querySelector('.prev')
        const next = section.querySelector('.next')
        const scrollbar = section.querySelector('.swiper-scrollbar')
        const pagination = section.querySelector('.pagination')

        if (section.classList.contains('hero')) {
            new Swiper(slider, {
                modules: [Pagination, Autoplay],
                centeredSlides: true,
                initialSlide: 1,
                slidesPerView: 'auto',
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: pagination,
                    clickable: true,
                },
            })
        }
        else if (section.classList.contains('how')) {
            new Swiper(slider, {
                modules: [
                    Navigation
                ],
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: true,

                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

            })
        }
        else if (section.classList.contains('reviews')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination, Scrollbar
                ],
                spaceBetween: 20,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                scrollbar: {
                    el: scrollbar,
                    hide: false,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                    },
                    769: {
                        slidesPerView: 2,
                    },
                    1025: {
                        slidesPerView: 3,
                    }
                }
            })
        }
        else if (section.classList.contains('delivery-swiper') && window.innerWidth <= 992) {
            const pagination = slider.closest('.delivery-tabs__content-item').querySelector('.pagination')
            const prev = slider.closest('.delivery-tabs__content-item').querySelector('.prev')
            const next = slider.closest('.delivery-tabs__content-item').querySelector('.next')

            new Swiper(slider, {
                modules: [
                    Pagination, Navigation
                ],
                slidesPerView: 'auto',
                spaceBetween: 20,
                autoHeight: true,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                },

            })
        }
        else if (section.classList.contains('pricing') && (window.innerWidth < 992)) {
            new Swiper(slider, {
                modules: [
                    Pagination
                ],
                slidesPerView: 'auto',

                pagination: {
                    el: pagination,
                },

            })
        }
        else if (section.classList.contains('about')) {
            new Swiper(slider, {
                modules: [
                    Autoplay
                ],
                loop: true,
                spaceBetween: 40,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            })
        }
    })
}