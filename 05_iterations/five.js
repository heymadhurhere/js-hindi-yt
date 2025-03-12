const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    console.log(item);
    
} ) // higher order iterating through arrays
console.log(" ");

coding.forEach( (val) => {
    console.log(val);
    
} )

function printMe(item) {
    console.log(item);
    
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
} )


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    
    console.log((item));
    
} )