
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
    const action = this.dataset.action;
    const counter = this.parentElement.querySelector('#value');
    console.log(counter.textContent);
    const currentValue = +counter.textContent;
    
    let newValue;

    if(action === 'increment') {
        newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
    }
    
    counter.textContent = newValue;

    })
})



