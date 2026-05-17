let arr = [1,2,3,4,5 ]

arr[2] = 678
console.log(arr , typeof arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[3])

console.log("Below is the new array")

const n = [ 2, 3 , 4 , 12, 34]
console.log( typeof n)
console.log(n.toString())
console.log(n.join("-"))
console.log(n.pop())
console.log(n)
console.log(n.push(100))
console.log(n)
console.log(n.shift())
console.log(n.unshift(1))
console.log(delete n[3])
console.log(n)
console.log(arr.concat(n))
console.log(arr.concat(n).sort())

let z = [1,2,3,45,67]
console.log(z.slice(2))

let numbers = [1,2,3,4,5,6,7]
console.log(numbers.splice(1,2) )