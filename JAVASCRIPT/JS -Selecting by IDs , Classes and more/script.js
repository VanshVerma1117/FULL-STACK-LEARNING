console.log("Javascript learning");

let SEM1 = document.getElementsByClassName("box")
console.log(SEM1)

SEM1[2].style.backgroundColor = "pink"
document.getElementById("IDE").style.backgroundColor = "cyan "
document.querySelector(".box").style.backgroundColor = "brown"
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "red"
});

console.log((e = document.getElementsByTagName("div")));

console.log(e[2].matches("#IDE")); //matches

console.log(e[3].closest(".container")); //closest

//Contains
console.log(document.querySelector(".container").contains(e[1]));
console.log(document.querySelector("body").contains(document.querySelector(".container")));
