const controlRangeInput = document.querySelector('#font-size-control');
const RangedtextEl = document.querySelector('#text');


controlRangeInput.addEventListener('input', onRangeInput);

function onRangeInput(event) {

    RangedtextEl.style.fontSize = event.currentTarget.value+'px';
}
