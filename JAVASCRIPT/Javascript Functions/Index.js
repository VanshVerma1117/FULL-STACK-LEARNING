console.log("Tutorial for Functions");

function greetings(Name) {
    console.log("hey " + Name + " Welcome to my github")    
    console.log("hey " + Name + " I'm good , how are you?")    
    console.log("hey " + Name + " I am learning Full stack development")    
    console.log("hey " + Name + " Currently i am learning javascript")    
}

greetings("Hiring Manager")
greetings("Github visitor")

function Sum(a, b) {
    // console.log( a + b)
    return a + b
}

// Sum(5,8); 
result = Sum (5,8)

console.log("Sum of these numbers is:" + result)

//Arrow function

const func1 = (N)=>{
    console.log("I am an arrow function: " + N)
}

func1(44);
func1(56);
func1(72);