// Write a program to calculate factorial of a number using reduce and using for loops

console.log("BELOW OUTPUT IS USING FOR LOOP")
let a = [1,2,3,4,5,6]
let result = 1;

for (let index = 0 ; index<a.length ; index++) {
    result = result * a[index]
}
console.log(result)

console.log("BELOW OUTPUT IS USING REDUCE()")
//Using reduce()
let b = [1,2,3,4,5,6]

const red = ( a , b ) =>{
    return a*b
}

console.log(a.reduce(red))