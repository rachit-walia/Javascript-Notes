const user={
    username:"Rachit",
    price:999,
    
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website  `); // this is used as current context
        console.log(this);

        /*
        output: {
    username: 'Rachit',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
}
        */
    }
}

user.welcomeMessage() // output: Rachit, Welcome to website  
user.username="Sam"
user.welcomeMessage()// output: Sam, Welcome to website

console.log(this); // output: {}

function chai(){
    let username="Rachit"
    console.log(this);
}
// we can only use this in objects !! we cannnot use this operator in functions
chai()

/*
output:<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
  navigator: [Getter],
  crypto: [Getter]
}

*/

const biscuit=function(){
    let username="Rachit"
    console.log(this.username);
}
biscuit() // output: undefined , bcz this operator doesnt work in functions

                // creating of Arrow functions

const biscuit2=()=>{
    let username="Rachit"
    console.log(this.username);
}
biscuit2()

    // basic arrow function
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// console.log(addTwo(3,4)); // output: 7


    // implicit return
// dont need to use parenthesis


// const addTwo=(num1,num2)=> num1+num2
// console.log(addTwo(3,4));


        // arrow function using objects
