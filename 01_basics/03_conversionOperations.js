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

// *********************** Operations ***********************
let num = 3;
let negValue = -num;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2); // power
// console.log(2%2); // remainder

// let str1 = "Madhur"
// let str2 = "Anand"
// let str3 = str1 + " " + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

console.log(true);

let game = 100;
++game;
console.log(game);