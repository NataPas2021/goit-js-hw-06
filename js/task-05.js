const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}


input.addEventListener('input', onInput);

function onInput(event) {
  refs.span = event.currentTarget;
  if(input === '') {
      return `Anonymous`
  }
}