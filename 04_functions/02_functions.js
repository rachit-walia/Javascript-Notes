function calculateCarPrice(...num1){
        return num1 // ... are the rest operator
}

console.log(calculateCarPrice(200,400,500,2000))
// output: [ 200, 400, 500, 2000 ]

function calculatePrice(val1,val2,...num1){
    return num1
}
console.log(calculatePrice(200,400,500,2000))
// ouput: [ 500, 2000 ]

// [ 200, 400, 500, 2000 ] 200 val1 ne lele ,400 val2 ne lele andrest array return krle dedia !

                // function with objects

const user={
    usernme:"Rachit",
    price: 199
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.usernme} and price is ${anyobject.price}`);
}
handleObject(user)
// output: User name is Rachit and price is 199

handleObject({
    username: "Sam ",
    price: 399
})
// output: User name is sam and price is 399

const myNewArray=[200,400,600,100]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //output:400