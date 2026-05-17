let a = [1, 45, 6 , 7 , 95]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// a.forEach((value , index , array) => {
//     console.log(value , index , array)
// });

// let obj = {
//     a : 1 ,
//     b : 2,
//     c : 3
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key , element)
//     }
// }

//map()
let newarr = a.map((e , index , value) => {
    return e**2;
});

console.log(newarr);  

//Filter()
const GreaterthanSeven = (e) => {
    if(e>=7){
        return true
    }
    return false
}
console.log(a.filter(GreaterthanSeven))

//Reduce()
let arr2 = [ 1,2,3,4,5,6]

const red = (a , b) =>{
    return a+b
}

console.log(arr2.reduce(red))