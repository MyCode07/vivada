import { replaceDomElements } from "./static/replace.js";
import { maskInputs } from "./static/inputmask.js";
import { animateAction, animateStaggerAction, aniamteTrigger, animateMapIcons } from "./parts/animations.js";
import { accordeon } from "./static/accordeon.js";

import "./parts/forms.js";
import "./parts/tabs.js";
import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/sliders.js";
import "./parts/offers.js";
import { stickyHeader } from "./parts/header.js";
import { calculator } from "./parts/calculator.js";
import { playVideoAction } from "./parts/video.js";
import { createMap } from "./parts/map.js";

playVideoAction();
aniamteTrigger();
animateAction()
animateMapIcons();
animateStaggerAction();

accordeon();
maskInputs('+7 (999) 999-99-99', '._mask-phone')
replaceDomElements();
stickyHeader();
calculator.start();
createMap();

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})

import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
});