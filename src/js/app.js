import { replaceDomElements } from "./static/replace.js";
import { maskInputs } from "./static/inputmask.js";
import { accordeon } from "./static/accordeon.js";

import "./parts/popup.js";
import "./parts/sliders.js";
import { stickyHeader } from "./parts/header.js";

accordeon();
maskInputs('+7 (999) 999-99-99', '._mask-phone')
replaceDomElements();
stickyHeader();


// import { Fancybox } from "@fancyapps/ui";

// Fancybox.bind("[data-fancybox]", {
// });

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})