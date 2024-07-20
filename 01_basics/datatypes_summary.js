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


// Reference link for data_types tyoeof


//https://262.ecma-international.org/5.1/#sec-11.4.3



//********************************************  Memory Types Working  *******************************************/

//    Stack   (Primitive)
//    Heap    (Non- Primitive)

let myYoutubename = "Harsh Mittal"

let anothername = myYoutubename

anothername = "Chai Aur Code"

console.log(myYoutubename)
console.log(anothername)




