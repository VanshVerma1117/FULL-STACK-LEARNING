// let obj ={
//     a: 1,
//     b: "Vansh"
// };

// console.log(obj);

class Animal{
    constructor(name){
        this.name = name
        console.log('object is created');
        
    }
    eats(){
        console.log('Animal is eating');
        
    }
    jumps(){
        console.log('Animanl is jumping');
        
    }
}

class Lion extends Animal{
    constructor(){
        super(name)
        console.log('object is created and it is Lion...');
        
    }
    eats(){
        super.eats()
        console.log(`i'll kill first and then eat`);
        
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Simba")
console.log(l);

