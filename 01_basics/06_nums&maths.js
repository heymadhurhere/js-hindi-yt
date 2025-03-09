const score = 400

const balance = new Number(100.125);
console.log(balance)

console.log(balance.toString().length) // number to string and then gives the length
console.log(balance.toFixed(2)) // rounds off to places

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)) // precises the value upto the provided number. basically round off krta h

const newNumber = 100000000
console.log(newNumber.toLocaleString('en-IN')) // converts to Indian comma system i.e. last three digit comma then two digits

/*****************MATHS********************/
// very powerful library of JS
console.log(Math)
console.log(Math.abs(-4)) // absolute value print
console.log(Math.round(4.6)) // rounds off the number
console.log(Math.ceil(4.2)) // takes upper value
console.log(Math.floor(4.9)) // takes the lower value
console.log(Math.min(4, 3, 5, 1)) // finds the minimum value in list if integers
console.log(Math.max(4, 3, 5, 1)) // finds the maximum value on list of integers

console.log(Math.random()) // gives random value inn between 0 and 1 generally a decimal value
console.log(Math.floor(Math.random() * 10) + 1) // rounds off to lower integer and 1 added to avoid the case when value is 0

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // gives value between max and min