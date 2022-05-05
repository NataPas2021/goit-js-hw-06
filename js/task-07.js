const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputChangeTextSize);

function onInputChangeTextSize(event) {
    console.log(onInputChangeTextSize); 
}