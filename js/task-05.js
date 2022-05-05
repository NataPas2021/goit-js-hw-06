const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
}


refs.input.addEventListener('input', onInput);

function onInput(event) {
  if(refs.input === '') {
    return `Anonymous`
} else {
  refs.name.textContent = event.currentTarget.value;
}
}