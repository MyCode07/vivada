import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        const prev = section.querySelector('._prev')
        const next = section.querySelector('._next')

        if (section.classList.contains('gallery-slider')) {
            new Swiper(slider, {
                modules: [
                    Navigation
                ],
                loop:true,
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
        
    })
}