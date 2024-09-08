const tinderUser=new Object()

console.log(tinderUser); // output:-> //

tinderUser.id="123abc"
tinderUser.name="Samm"
tinderUser.isLoggedIn=false

console.log(tinderUser);
// output : { id: '123abc', name: 'Samm', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rachit",
            lastname:"Walia"
        }
    }
}
console.log(regularUser.fullname);
// output: { userfullname: { firstname: 'Rachit', lastname: 'Walia' } }

// console.log(regularUser.fullname.firstname);

const obj1={1: "a" , 2: "b"}
const obj2={3: "a" , 4: "b"}
const obj3={obj1,obj2}
console.log(obj3); // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4=Object.assign(obj1,obj2)
console.log(obj4)
// output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 
const obj5={...obj1,...obj2} // using spread operator
console.log(obj5)
// output:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
// output: [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
// output: [ '123abc', 'Samm', false ]

console.log(Object.entries(tinderUser));
// output: [ [ 'id', '123abc' ], [ 'name', 'Samm' ], [ 'isLoggedIn', false ] ]      

// this is used to check if there exist a property in out object
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// output: true