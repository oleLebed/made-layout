import './normalize.scss';
import './main.scss';

const collection = document.getElementsByClassName('section-1__form-input');
const hide = document.getElementById('hide');
const hideSmall = document.getElementById('hide-small');

Array.from(collection).forEach(input => input.addEventListener('input', () => {
    const hideInput = input.clientHeight > 40 ? hide : hideSmall;

    hideInput.textContent = input.value;
    input.style.width = hideInput.offsetWidth + "px";
}));

