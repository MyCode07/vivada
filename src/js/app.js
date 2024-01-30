import { replaceDomElements } from "./static/replace.js";
import { maskInputs } from "./static/inputmask.js";
import { accordeon } from "./static/accordeon.js";
import { stickyHeader } from "./parts/header.js";
import { Fancybox } from "@fancyapps/ui";

import "./parts/popup.js";
import "./parts/sliders.js";
import "./parts/radio.js";

accordeon();
maskInputs('+7 (999) 999-99-99', '._mask-phone')
replaceDomElements();
stickyHeader();



Fancybox.bind("[data-fancybox]", {
});

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})