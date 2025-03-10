//const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "ayush"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "anonymous@gmail.com",
    fullName: {
        userFullname: {
            firstname: "Madhur",
            lastname: "Anand"
        }
    } // we can go under as many nesting as we want
}

console.log(regularUser.fullName.userFullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, obj1, obj2) // joins the objects

const obj4 = {...obj1, ...obj2} // spreads the elements of the object and stores them
console.log(obj4);


const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    }
]
console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // keys of the object tinderuser
console.log(Object.values(tinderUser)); // values of the object tinderuser
console.log(Object.entries(tinderUser)); // first element is key and second element is value and everything is in array format 
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks of the property is available in the object or not
