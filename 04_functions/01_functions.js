

function sayMyName(){
    console.log("R");
    console.log("C");
    console.log("A");
    console.log("I");
    console.log("H");
    console.log("T");

}
// sayMyName

function addTwoNumbers(number1, number2){
    
    console.log(number1+number2);
}
// when we are creating a function and entering numbers then its called parameters.


addTwoNumbers(3,4); // output: 7
// when we are calling functions and giving values then it is called arguments.

const result=addTwoNumbers(3,5); // outpus: 8

console.log("Result: ",result);
// output: Result:  undefined

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}

loginUserMessage("Rachit walia ")
console.log(loginUserMessage("Rachit"));
// output: Rachit just logged in

// if we dont pass any value then it will give
console.log(loginUserMessage());
// output: undefined just logged in
// please enter a username
