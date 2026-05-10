console.log("Hello this is console output");

// var a = 5
// var b = 6
// var c = "vansh"
// console.log( a + b )
// console.log( typeof a , typeof b , typeof c)

let a = 5;
a = 6; // let can be updated but no re-declared
  
console.log(a); // gives output = 6
{
  const _1 = 67;
  console.log(_1); // gives output 67 only for console.log within this block
}
//  console.log(_1) // shows _1 is not defined because const is block scoped

let x = "Michael Jordan";
let y = 3.556434;
let z = 45;
let m = true;
let n = undefined;
let o = null;

console.log(x, y, z, m, n, o);
console.log(typeof x, typeof y, typeof z, typeof m, typeof n, typeof o);

let P = {
  name: "WPO ",
  type: "Game",
  Established: "2017",
}

console.log(P)
P.spending = "$30"
console.log(P)
P.spending = "$90"
console.log(P)