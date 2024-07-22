const name = "Harsh"
const repoCount = 50

//console.log(name +  repoCount + " Value")



//console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`+ " Value")

const gameName = new String('harsh-mittal-hapur')
console.log(gameName.split('-'))

//console.log(gameName[2])
//console.log(gameName.__proto__)    // shows single underscore but use two underscore on same point like this __proto__   output shows the oblject{}
                                   //  by only use single underscore create output shows the undefin

//console.log(gameName.length)  
//console.log(gameName.toUpperCase())         
//console.log(gameName.charAt(2))      
//console.log(gameName.indexOf('s'))   


const newString = gameName.substring(0,6)
//console.log(newString)

const anotherString = gameName.substring(-2,6)
//console.log(anotherString)

const newStringOne =  "         harsh Traders     "
//console.log(newStringOne)
//console.log(newStringOne.trim())    // by using trim easily we remove extra spaces in  sring   and also we trimEnd and trimStart

const url =  "https://harshtraders.com/harsh%20mittal"

console.log(url.replace('%20', '___'))

console.log(url.includes('harsh'))





