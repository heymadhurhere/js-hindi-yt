let score = "33"

console.log(typeof score);
console.log(typeof (score))

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let newNumber = Number(score)
console.log(typeof (newNumber))

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let value = "";
let boolvalue = Boolean(value);
console.log(boolvalue);