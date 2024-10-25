body.innerHTML = ""
main = document.getElementById("main");

function setupCalculator() {
    main.innerHTML = "";
    main.id = "calculator"; 

    const inputField = document.createElement("input");
    inputField.type = "text"; 
    inputField.readOnly = true;
    main.appendChild(inputField); 

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("btn");

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
    ];

    buttons.forEach(button => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = button;
        buttonElement.onclick = () => handleButtonClick(button, inputField);
        buttonContainer.appendChild(buttonElement);
    });

    const clearButton = document.createElement("button");
    clearButton.textContent = 'C';
    clearButton.classList.add('clear-btn');
    clearButton.onclick = () => handleButtonClick('C', inputField);
    buttonContainer.appendChild(clearButton);

    main.appendChild(buttonContainer); 
}

function handleButtonClick(button, inputField) {
    if (button === '='  && inputField.value != '') {
        try {
            inputField.value = eval(inputField.value);
        } catch (error) {
            inputField.value = 'Error';
        }
    } else if (button === 'C') {
        inputField.value = '';
    }else if (button === '=' && inputField.value === '') {
        inputField.value = '';
    }else {
        inputField.value += button;
    }
}
