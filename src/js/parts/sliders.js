import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('.slider');
        const prev = section.querySelector('._prev')
        const next = section.querySelector('._next')
        const pagination = section.querySelector('._pagination')

        if (section.closest('.gallery-slider')) {
            new Swiper(slider, {
                modules: [
                    Navigation
                ],
                loop: true,
                spaceBetween: 25,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
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

        if (slider.closest('.main__content')) {
            new Swiper(slider, {
                modules: [
                    Navigation, Pagination
                ],
                loop: true,
                spaceBetween: 25,
                slidesPerView: 1,
                autoHeight:true,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                pagination: {
                    el: pagination,
                    clickable: true
                }
            })
        }

    })
}