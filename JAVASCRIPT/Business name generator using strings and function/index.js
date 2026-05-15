const adjective = {
    1 : "Crazy" ,
    2 : "Amazing" ,
    3 : "Fire"
};

const shop_name = {
    1 : "Engine" ,
    2 : "Foods" ,
    3 : "Garments" 
};

const another_word = {
    1 : "Bros" ,
    2 : "Limited" ,
    3 : "Hub" 
};

function business_name() {
    let r1 = Math.floor(Math.random() * 3) + 1; 
    let r2 = Math.floor(Math.random() * 3) + 1;
    let r3 = Math.floor(Math.random() * 3) + 1;

    let part1 = adjective[r1]
    let part2 = shop_name[r2]
    let part3 = another_word[r3]
    
    return(`${part1} ${part2} ${part3}`)
}

console.log(`Your business name is: ` + business_name());