async  function getData(){
    //free fake api
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    let data = await x.json()
    console.log(data)
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