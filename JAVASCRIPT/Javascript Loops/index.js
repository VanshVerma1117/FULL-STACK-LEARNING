//for loop
// for printing 1 to 10
for (i=1 ; i<=10 ; i++) {
    console.log(i)
}


// For-in loop 
const bill = {
    oil: 500,
    filter: 200,
    service: 1000
};

let total = 0

for (let item in bill) {
    total = total + bill[item]; // Adding each "drawer" value to the total
}

console.log("Your total is: " + total);

// the while loop 
let count = 1;

while (count<=5){
    console.log("Count is :" , + count);
    count++
}

console.log("loop finished")

//Do while loop
let Lives = 5;

do {
    console.log("Remaining lives:" +Lives);
    Lives --
} while(Lives > 0);

console.log("Lives finished!")