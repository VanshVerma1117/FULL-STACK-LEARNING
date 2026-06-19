let a = prompt("Enter first number");
let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);

// console.log("the sum is: " + sum)

function main() {
  let x = 1;
  try {
    console.log("the sum is: " + sum * x);
    return true;
  } catch (error) {
    console.log("ERROR!!! , x is not defined");
    return false;
  } finally {
    // if we want our code to work after return statement inside a function we have to use finally
    console.log("files are being closed");
  }
}
let c = main()