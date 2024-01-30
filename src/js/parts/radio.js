const radioBtns = document.querySelectorAll('.rating-form__ratings-item');
const formRating = document.querySelector('form input[name="rating"]');
if (radioBtns.length) {
    radioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            radioBtns.forEach(item => {
                item.classList.remove('_active')
            });
            btn.classList.add('_active')
            formRating.value = btn.querySelector('span').textContent;
        })
    });
}