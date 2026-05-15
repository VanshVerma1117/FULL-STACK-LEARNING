const prompt = require('prompt-sync')();

let a = Number(prompt("Enter your number 1: "));
let b = Number(prompt("Enter your number 2: "));
 
let random =Math.random()

if (random<0.1)
    {
    console.log("Addition calculation: " , a-b)
    console.log("Subtraction calculation: " , a/b)
    console.log("Division calculation: " , a**b)
    console.log("Multiplication calculation: " , a+b)
}
else {
    console.log("Addition calculation: " , a+b);
    console.log("Subtraction calculation: " , a-b);
    console.log("Division calculation: " , a/b);
    console.log("Multiplication calculation: " , a*b);
}