// Singleton
// Object.create


// object literals

const mySym =  Symbol("key1")

const Jsuser = {
    name : "Harsh",
    "full name" : " Harsh Mittal",
    [mySym] : "mykey1",
    Age : 22,
    location : "hapur",
    email : "harsh@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

//console.log(Jsuser.email)
//console.log(Jsuser["full name"])
//console.log(Jsuser["email"])
//console.log(Jsuser[mySym])

Jsuser.email = "harsh@xyz.com"
//Object.freeze(Jsuser)
Jsuser.email = " harsh@gmail.com"
//console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("hello JS user");
}


Jsuser.greetingtwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
    


console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())

//myArray = ["h","a"]
//console.log(myArray[1])