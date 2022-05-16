
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const action = this.dataset.action;
        const input = this.parentElement.querySelector('#value');
        const currentValue = +input.value; 
        let newValue; 

        if(action === 'increment') {
            newValue = currentValue + 1;
        } else{

        }
        input.value = newValue; 
    })
})



