document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".buttons button");
    let currentInput = "";
    let operatorUsedLast = false; // Track if the last input was an operator

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "C") {
                // Clear everything
                currentInput = "";
                operatorUsedLast = false;
            } else if (value === "=") {
                // Evaluate the expression
                try {
                    currentInput = eval(currentInput.replace("×", "*").replace("÷", "/")).toString();
                    operatorUsedLast = false;
                } catch {
                    currentInput = "Error";
                }
            } else {
                // Append numbers and operators
                if ("+-×÷".includes(value)) {
                    if (operatorUsedLast) return; // Prevent consecutive operators
                    operatorUsedLast = true; 
                } else {
                    operatorUsedLast = false; // Reset when number is entered
                }

                currentInput += value;
            }

            display.textContent = currentInput || "0"; // Show 0 if empty
        });
    });
});
