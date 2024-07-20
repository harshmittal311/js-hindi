// Primitive

// 7 types
/*
string
number
boolean
null
undefined
symbol------ for uniquee
bigInt

*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

//console.log(id === anotherId);

const bigNumber = 34567891234568547n


console.log(typeof userEmail)

//console.log(score);

// Reference (non primitive)
/*
array
object
function

 */

const heros = ["shaktiman", "naagraj", "doga"]  // array always write in brackets....

let myobj = {
    name: "Harsh",
    age: 22,
}

const myFunction = function(){
console.log("Hello World")
}



console.log(typeof myFunction)
