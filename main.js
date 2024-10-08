/**
 * 2.3 - Mathematics
 * ICS3 - Mr. Brash 🐿️
 * 
 * Make sure to read the README.md (especially if you missed class)
 * Then checkout the YOUR_TASK.md to see the practice plan
 * 
 * Don't forget - these are playgrounds. Once you finish the requested task, feel free to play.
 **/ 

// Get a random number between 0 and 100
let random_number = Math.random() * 100

// Round it to the nearest whole number
random_number = Math.round(random_number)

// Output the result usijng a new way to insert a variable into a string (called a template)
console.log(`I generated the number ${random_number}`)

// ***  Your code goes below  ***

// TASK PART 1

// Let statements and simple addition to varibles
let celsius = 100
let fahrenheit = 0

celsius += 2

// Celsius to fahrenheit equation then print

fahrenheit = (celsius * 9/5) + 32

console.log(fahrenheit)

// TASK PART 2

// Reset variable, fahrenheit to celsius equation then print

fahrenheit = 77

celsius = (fahrenheit - 32) * 5/9

console.log(celsius)

// TASK PART 3

console.log(`${fahrenheit} degrees Fahrenheit is ${celsius} degrees celsius.`)

// probably useless code keeping it just in case i want to use it later
// let y1 = 0
// let y2 = 0
// let x1 = 0
// let x2 = 0

// let A = (x1 + y1)
// let B = (x2 + y2)

let m = (0 - 5)/(6 - (-4))

console.log(m)

// TASK PART 5

// Random numbers and rounding
let radius = Math.round(Math.random() * 10)
let height = Math.round(Math.random() * 10)

// Equation and print

let volume = Math.round(Math.PI*(radius**2) * height)

console.log(`the volume of my random cylinder with a radius of ${radius} and a height of ${height} is ${volume}`)

