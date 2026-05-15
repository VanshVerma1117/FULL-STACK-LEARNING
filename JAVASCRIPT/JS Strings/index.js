console.log("Javascript strings")
let a = "Vansh" ;
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])

console.log(a.length)

let real_name = "Vansh"
let friend_name = "Malek"

console.log("My name is : " + real_name + " and my friend name is : " + friend_name );
console.log(`My name is : ${real_name} and my friend name is : ${friend_name}`) // inserting variable inside a template literal and known as string interpolation

// console.log("Roh"an")
console.log(`Roh"an`)   //putting double quotes inside a string
console.log("Roh\"an")  //putting double quotes inside a string

let Real_name = "Vanshsh"
console.log(Real_name.toUpperCase());
console.log(Real_name.toLowerCase());
console.log(Real_name.slice(1,4));
console.log(Real_name.slice(3));

console.log(Real_name.replace("sh" , "tu")); // only first sh will be replaced
console.log(Real_name.concat(friend_name , " wpo " , " Game " , " hello "))
