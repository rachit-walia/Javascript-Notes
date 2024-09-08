// Immediate Involked Function Expression (IIFE)

(function chai(){
    console.log("DB CONNECTED");
})(); // output: DB CONNECTED
// we have to use ; (semi colon) to end immediate involked function .

// if we dont use ; the next immediate involked function will be exectued.

(function coding(){
    console.log('DB connected');
})(); // output: DB connected

// unmaed iife
((name)=>{
    console.log(`DB connected two ${name}`);
})('Rachit')
// output: DB connected two Rachit