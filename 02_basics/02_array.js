const marvel_hero =  ["thor", "ironman","spiderman"]
const dc_hero = ["superman","flash","batman"]

//marvel_hero.push(dc_hero)    // array push full array as a data in marvel array
//console.log(marvel_hero)
// push array work on same array but concat returm new array

//const all_hero  = marvel_hero.concat(dc_hero)

//console.log(all_hero)

//const all_new_hero = [...marvel_hero, ...dc_hero]
//console.log(all_new_hero)

//const another_array = [1,2,3,[4,5,6],7,[8,9,10,[11,12]]]
//const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array) 

//const harsh = ["taru ", "xx",["yy","aaa",["hhhh","dfgh"]]]
//const mittal = harsh.flat(Infinity)
//console.log(mittal)

console.log(Array.isArray("harsh"))
console.log(Array.from("harsh"))

console.log(Array.from({name : "harsh"}))    // interesting factor

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2, score3))      

// please read about isarray , from and of etc....

//Harsh Mittal 
//Taru Mittal




