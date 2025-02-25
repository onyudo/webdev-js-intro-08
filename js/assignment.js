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

function findLargestNumber(arr) {
    let largestNumber = arr[0];  // Initialize largestNumber to the first element

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) { // Start from the second element (i = 1) and compare each element to largestNumber.
        if (arr[i] > largestNumber) {  // If the current element (arr[i]) is larger than largestNumber, update largestNumber.
            largestNumber = arr[i];     // Update largest number if a smaller one is found
        }
    }

    return largestNumber;  // Return the largest number
}

function findAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Loop through the array and sum up all the numbers
    }

    // Calculate the average by dividing the sum by the length of the array
    let average = sum / arr.length;
    return average;  // Return the average
}

function render() {

    let smallestNumber = findSmallestNumber(myNumbers);
    smallestNumberElement.innerText = smallestNumber; 

    let largestNumber = findLargestNumber(myNumbers);
    largestNumberElement.innerText = largestNumber;

    let averageNumber = findAverage(myNumbers);
    averageNumberElement.innerText = averageNumber;

}

submissionBtn.addEventListener("click", function () {
    render();
});