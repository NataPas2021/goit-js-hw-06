const countRef = document.querySelector('input');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('clck', createBoxes);
buttonRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const amount = 
  const divRef = documnt.createElement ('div');
  const numberDiv = divRef *  
}

function destroyBoxes() {

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
