// primitive
  
// 7 types: string, number, boolean, Null, undefined , Symbol,Big int



// Reference(Non primitive)
// Arrays ,Objects, Functions

const heros=["saktiman","naagraj","doga"];
let myObj={
    name:"rachit",
    age:22,
}

const myFunction=function(){
    console.log("helloworld")
}


/**************Stack , Heap ****************/

// stack (Primitive) ,Heap(Non-Primitve)
let myYoutubename="rachitwaliadotcom"
let anothername=myYoutubename
anothername="helloHelo"
console.log(myYoutubename)
console.log(anothername)

let userOne={
    email:"user@google.com",
    upi:"user@paytm"

}
let userTwo=userOne
userTwo.email="rachit@google.com"
console.log(userOne.email)
console.log(userTwo.email)

