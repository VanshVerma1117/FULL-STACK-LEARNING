let button = document.getElementById("btn");

// button.addEventListener("click", () => {
    // alert("I was clicked")
// })
button.addEventListener("dblclick", () => {
    document.querySelector("#btn").innerHTML = "<b>I was double clicked</b> "
}) 
button.addEventListener("contextmenu", () => {
    document.querySelector("#btn").innerHTML = "<b>I was right clicked</b> "
}) 
document.addEventListener("keydown", () => {
    document.querySelector("#btn").innerHTML = "<b>I was key pressed</b> "
}) 