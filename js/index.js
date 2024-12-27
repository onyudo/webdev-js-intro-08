// Prevent us from attempting to use variables
// that are not declared
//"use strict"

// Create an array and loop through it, logging out each value using the basic loop syntax. 

/*

let dogs = ['Chihuahua', 'Pit Bull', 'Border Collie', 'Poodle'];

for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
} // Output: Chihuahua, Pit Bull, Border Collie, Poodle

// Create an array and loop through it, logging out each value using the "for...of" syntax. 

let dogs = ['Chihuahua', 'Pit Bull', 'Border Collie', 'Poodle'];

for (let dog of dogs) {
    console.log(dog);
} // Output: Chihuahua, Pit Bull, Border Collie, Poodle

// Create an array and loop through it, logging out each value using the Array.forEach() method. 

let dogs = ['Chihuahua', 'Pit Bull', 'Border Collie', 'Poodle'];

dogs.forEach(function(dog) {
    console.log(dog);
}); // Output: Chihuahua, Pit Bull, Border Collie, Poodle

// Loop through an array using "for...of" and try assigning all the elements a new value. What happens? 

let dogs = ['Chihuahua', 'Pit Bull', 'Border Collie', 'Poodle'];

// New dog breeds
newBreeds = ['Golden Retriever', 'Bulldog', 'Beagle', 'Dachshund'];

let i = 0; // Initialize index to track the position in the array

// Using for...of to loop through each value
for (const dog of dogs) {
    dogs[i] = newBreeds[i]; // Assign the new breed to the current index
    i++; // Increment the index to move to the next position in the array
}

console.log(dogs);

// Loop through an array using the Array.forEach() method and try assigning all the elements a new value. What happens? 

let dogs = ['Chihuahua', 'Pit Bull', 'Border Collie', 'Poodle'];

const newBreeds = ['Golden Retriever', 'Bulldog', 'Beagle', 'Dachshund'];

dogs.forEach((dog, index) => {
    dogs[index] = newBreeds[index];  // Assign the new breed to the current index
});

console.log(dogs);

// Research "for...in" loops. 

//It looks like for...in loops use a key and its value, so arrays can be problematic using them.
//Using my dog example, I will loop through it using a for...in loop but will try to use the index as the key:

let dogs = ['Chihuahua', 'Pit Bull', 'Border Collie', 'Poodle'];

for (let index in dogs) {
    console.log(index + ': ' + dogs[index]);
}

*/