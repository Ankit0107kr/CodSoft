let input = document.getElementById('inputbar');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Adding click event for button inputs
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Adding keyboard input support
document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        string += e.key;
        input.value = string;
    } else if (e.key === 'Enter' || e.key === '=') {
        string = eval(string);
        input.value = string;
    } else if (e.key === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (e.key === 'Escape') {
        string = "";
        input.value = string;
    }
});

// Function to handle input from both button clicks and keyboard events
function handleInput(value) {
    if (value == '=') {
        string = eval(string);
        input.value = string;
    } else if (value == 'AC') {
        string = "";
        input.value = string;
    } else if (value == 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
}
