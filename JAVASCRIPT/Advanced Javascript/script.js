async function sleep(){
     return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
     })
}
//IIFE function
(async function main(){
    // let a = await sleep()
    // console.log(a);
    
    // let b = await sleep()
    // console.log(b);
    
})()


//Destructuring
let [x,y, ...rest] = [1,5,7,8,9,6,4];
console.log(x,y, rest);


//Destructuring Objects
let obj = {
    a:1,
    b:2,
    c:3
}
let {a , b}= obj
console.log(a,b)

function sum(a,b,c,d,e,f){
    return a+b+c+d+e+f
}

let arr=[1,2,3,4,5,6]
console.log(arr[0]+arr[1]+arr[2]+arr[3])
console.log(sum(...arr)) //Spread syntax