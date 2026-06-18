async  function getData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

async function main() {
    console.log("loading modules")
    console.log("Do something else")
    console.log("Load Data")
    let data = getData()
    console.log(data)
    console.log("process data")
    console.log("Vansh")
}

main()