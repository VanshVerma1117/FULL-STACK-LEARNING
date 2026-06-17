console.log("I am a hacker");
console.log("I am a hecker");

setTimeout(() => {
  console.log("I am a inside timeout");
}, 2000);
setTimeout(() => {
  console.log("I am a inside timeout 2");
}, 2000);
setTimeout(() => {
  console.log("I am a inside timeout 3");
}, 2000);

console.log("this is end");

const fn = () => {
    console.log("CALLBACK HELL")
}

const callback = (arg , fn) => {
  console.log(arg)
  fn()
};

const loadScript = (src, callback, fn) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = () => { 
    callback("Vansh" , fn)
  };
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback);
