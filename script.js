const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.getAttribute("data-value");
        display.value = currentInput;
    });
});

// Clear screen
clear.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
});

// Equals button
equals.addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch {
        display.value = "Error";
    }
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    if ((e.key >= "0" && e.key <= "9") || ["+", "-", "*", "/", "."].includes(e.key)) {
        currentInput += e.key;
        display.value = currentInput;
    } else if (e.key === "Enter") {
        try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        } catch {
            display.value = "Error";
        }
    } else if (e.key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    } else if (e.key.toLowerCase() === "c") {
        currentInput = "";
        display.value = "";
    }
});
