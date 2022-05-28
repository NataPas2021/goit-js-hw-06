const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const textColorRef = document.querySelector('.color');

buttonRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  const hexColor = getRandomHexColor();
  bodyRef.style.backgroundColor = hexColor;
  textColorRef.textContent = hexColor;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
