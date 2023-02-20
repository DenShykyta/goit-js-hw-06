const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const onDecrementClick = function () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

const onIncrementClick = function () {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrBtn.addEventListener('click', onDecrementClick);

incrBtn.addEventListener('click', onIncrementClick);


