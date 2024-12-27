"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber(arr) {
    let smallestNumber = arr[0];  // Initialize smallestNumber to the first element

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) { // Start from the second element (i = 1) and compare each element to smallestNumber.
        if (arr[i] < smallestNumber) {  // If the current element (arr[i]) is smaller than smallestNumber, update smallestNumber.
            smallestNumber = arr[i];     // Update smallest number if a smaller one is found
        }
    }

    return smallestNumber;  // Return the smallest number
}









function render() {

    let smallestNumber = findSmallestNumber(myNumbers);
    smallestNumberElement.innerText = smallestNumber; 

}

submissionBtn.addEventListener("click", function () {
    render();
});