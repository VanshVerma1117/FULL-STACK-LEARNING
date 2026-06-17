console.log('this is Promises');

let prom1 = new Promise((resolve , reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("No random was generated below 0.5")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done")
            resolve("Vansh")
        }, 3000);
    }
})
let prom2 = new Promise((resolve , reject) => {
    let a = Math.random();
    if (a<0.5){
        reject("No random was generated below 0.5 again")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done 2")
            resolve("Vansh 2")
        }, 3000);
    }
})

let p3 = Promise.allSettled([prom1 , prom2])

p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})