/* 
    Selecting or accessing elements
        1. getElementById()
        2. getElementsByClassName()
        3. getElementsByTagName()
*/

// getElementById()
const bigHeading = document.getElementById("big-heading")
console.log(bigHeading)

// getElemetsByClassName()
const boxes = document.getElementsByClassName("box")
boxes.style.backgroundcolor = boxes.className.spilt(" ")[1];

const fullName = "kehinde itunu"

for (fullName of fullNames) = fullName.split(" ")[0];