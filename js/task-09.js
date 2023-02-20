function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorNameEl = document.querySelector('.color')

changeColorBtn.addEventListener('click', onBtnClick);

function onBtnClick() {

  document.body.style.background = getRandomHexColor() ;
  colorNameEl.textContent = document.body.style.background;
  
}
