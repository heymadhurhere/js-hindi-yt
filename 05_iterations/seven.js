const myNums = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNums.map( (num) => num + 10 )
console.log(newnums);


// CHAINING more than 1 methods used at once
const ans = myNums
            .map( (num) => num * 10 )
            .map( (num) => num + 1 )
            .filter( (num) => num >= 40 ) // this is CHAINING
            
console.log(ans);
            

