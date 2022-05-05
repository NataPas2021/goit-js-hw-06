const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlurInput);

function onBlurInput() {
    if(this.value.length == this.dataset.length) {
        this.classList.add('valid');
    } else {
        this.classList.add('invalid');
    }
};