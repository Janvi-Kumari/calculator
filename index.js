// Elements
const inputEl = document.getElementById('input')
let inputValue = ""

const buttons = document.querySelectorAll('.key')



function process(event) {
    const element = event.target
    const key = element.getAttribute('data-value')


    if (key === 'space' || key === 'backspace' || key === 'ac' || key === "=") {
        if (key === 'space') {
            inputValue += ' '
        }
        else if (key === 'ac') {
            inputValue = ''
        }
        else if (key === "=") {
            inputValue = eval(inputValue);
        }
        else {
            inputValue = inputValue.slice(0, inputValue.length - 1)
        }

    }

    else {
        inputValue += key
    }

    inputEl.innerText = inputValue
}



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', process)
}