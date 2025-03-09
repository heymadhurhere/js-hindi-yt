const name = "madhur"
const repoCount = 3

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('madhur-mad-5414')

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('m'))

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 6);
console.log(anotherString)

const newStringOne = "  madhur  "
console.log(newStringOne);
console.log(newStringOne.trimStart())

const myName = "Madhur-Anand"
console.log(myName.replace('-', ' '))
console.log(myName.includes('Madhur'))

console.log(gameName.split('-'))