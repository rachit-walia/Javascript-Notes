function one(){
    const username="Rachit"
    function two(){
        const website='youtube'
        console.log(username);
    }
    console.log(website);
    two()
}
one()

if(true){
    const username="Rachit"
    if(username=="Rachit"){
        const website="youtube"
        console.log(username+website);
    }
    console.log(website);
}

console.log(username);

// this will give us errors 


// first error will be that we cannt access website outside the loop and same error will show in username also

function addone(num){
    return num+1
}
addone(5)  