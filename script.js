//let input = document.getElementsByClassName("textContainer");
let input = document.getElementById("display");

//All buttons Nodelist
let buttonData = document.querySelectorAll("button");

let clear = document.getElementById("clear");
let equal = document.getElementById("evalBttn");
let remove = document.getElementById("del");

let current = "";


// Clear Input screen on page reload
window.onload = () => {
    input.value = "";
}


function updateInput () {
    // Get text content and set to variable current 
    input.textContent = current;
    console.log(input.textContent); 
}

buttonData.forEach ((buttonClass) => {
    const pressedValue = buttonClass.dataset.num;
    // console.log(pressedValue)

    buttonClass.addEventListener("click", () => {
        current += pressedValue;
        updateInput();
    })
});

// //The Clear event
clear.addEventListener("click", () => {
    current = "";
    updateInput();
});

//The Delete event

    remove.addEventListener("click", () => {
        console.log(current);
        // current = current.slice(0, -1);
        current = current.substring(0, current.length - 1);
        current = current.replace(/.$/, ""); // Remove the last character from the string
         
        updateInput();
    });


//The Equal event
// equal.addEventListener("click", () => {

//     try {
//         let result = eval(current);
//         current = result.toString();

//     } catch (e) {
//         current ="Invalid";
//     }

//     updateInput();
// });


equal.addEventListener("click", () => {
    try {
        let sanitized = current.replace(/[^0-9+\-*/.%()]/g, ""); // Sanitize input to allow only numbers and operators and parentheses
        let result = Function(`"use strict"; return (${sanitized})`)(); // Use Function constructor to evaluate the expression safely
        current = result.toString(); // Convert result to string for display
    } catch (e) {
        current = "Error";
    }

    updateInput();
});