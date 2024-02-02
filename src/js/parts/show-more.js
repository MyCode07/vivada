const btnsMore = document.querySelectorAll('._btn-more');

if (btnsMore.length) {
    btnsMore.forEach(btn => {
        const span = btn.querySelector('span')
        const hideElems = btn.closest('.wp-block-columns').querySelectorAll('._hide')

        if (hideElems.length) {
            btn.addEventListener('click', () => {
                btn.classList.toggle('_active')

                if (btn.classList.contains('_active')) {
                    span.textContent = span.dataset.textHide
                }
                else {
                    span.textContent = span.dataset.textShow
                }

                hideElems.forEach(elem => {
                    elem.classList.toggle('_active')
                })
            })
        }
    })
}