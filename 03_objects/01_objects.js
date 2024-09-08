// objects declare has 2 methods

/*
1.literal
2.constructor
*/

// singleton--constructor  se jab bhi objects bnate hai tou singleton se banta hai.
// literal se kabhi bhi SINGLETON nhi bnega.



                // object creating
const Jsuser={
    name:"Rachit",
    "Full name":"Rachit Walia",
    age:20,
    location:"Chandigarh",
    email:"Rachitwalia@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]

}       
// object.create

                // accessing the object
// Method -1

console.log(Jsuser.email); 
// output: Rachitwalia@gmail.com

// Method-2
console.log(Jsuser["email"]) // " " bcz it is taking its value as a string
// output: Rachitwalia@gmail.com

console.log(Jsuser["Full name"])
// output: Rachit Walia

const mySym=Symbol("key1")
// tring to create a symbol in our object

const ob={
    name:"Walia",
    "pura-name":"Walia waliarachit",
    mySym:"mykey1",
    Salary:25000
}
console.log(ob.mySym) // output: mykey1
// output is correct but if we check its data type its not using a symbol.
console.log(typeof ob.mySym)// output: string

// if we have to use it like symbol we have to put it in  sqaure bracket [].

const ob2={
    name:"Walia",
    "pura-name":"Walia waliarachit",
    [mySym]:"mykey1",
    Salary:25000
}

console.log(ob2)
/*
output-->
 {
  name: 'Walia',
  'pura-name': 'Walia waliarachit',
  Salary: 25000,
  [Symbol(key1)]: 'mykey1'
}
 */

console.log(ob2[mySym]) // output: mykey1

// if we have to change the value of in an objects

ob2.name="rahul sharma "
console.log(ob2.name) // updated and output is rahul sharma

// Object.freeze(ob2)
// used to freeze an objects.. we cannt update the value of object once we freeze it

ob2.greeting=function(){
    console.log("Hello Js user");
}
console.log(ob2.greeting)
// output:-> [Function (anonymous)]
console.log(ob2.greeting())
// output:-> Hello Js user

ob2.greetingtwo=function(){
    console.log('Hello Js user,${this.name}');
}
console.log(ob2.greeting())
console.log(ob2.greetingtwo())