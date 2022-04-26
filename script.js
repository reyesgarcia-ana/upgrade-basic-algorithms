// alert ("Java Script funcionando perfectamente")

const myFavoriteHero = "Hulk";
const x = 50;
const h = 5;
const y = 10;
let z = h + y;

// -----------Iteration#2
// -----------Ejercicio 1.1

const character = {
    name: 'Jack Sparrow', 
    age: 10
};

character.age = 25;
console.log(character.age);

// -----------Ejercicio 1.2
const firstName = "Jon";
const lastName = "Snow";
const age = "24";
console.log(("Soy"), firstName, lastName+(", Tengo"), age,("años y me gustan los lobos"));

// -----------Ejercicio 1.3
const toy1 ={
    name: "Buss LightYear",
    price: 19,
}

const toy2 ={
    name: "Rayo Mcqueen",
    price: 29,
}

console.log(("La suma de los dos juguetes es:"), toy1.price+toy2.price);

// -----------Ejercicio 1.4

let globalBasePrice = 10000;
const car1 = {
    name: 'BMW m&m',
    basePrice: 50000,
    finalPrice: 60000,
};

const car2 = {
    name: 'Chevrolet Corbina', 
    basePrice: 70000, 
    finalPrice: 80000,
};

console.log("Antes el globalBasePrice era:", globalBasePrice);
globalBasePrice = 25000;
console.log("Ahora es:", globalBasePrice);

car1.finalPrice = globalBasePrice+car1.basePrice;
console.log("El precio del",car1.name, "es:", car1.finalPrice);

car2.finalPrice = globalBasePrice+car2.basePrice;
console.log("El precio del",car2.name, "es:", car2.finalPrice);


// -----------Iteration#3
// -----------Ejercicio 1.1
const resultado = 10*15;
window.alert("El resultado de 10x5 es igual a: " + (10*5));

// -----------Ejercicio 1.2
window.alert("El resultado de 10/2 es igual a: " + (10/2));

// -----------Ejercicio 1.3
let resultado2 = 15/9;
let dosdecimales = resultado2.toFixed(2);

window.alert("El resultado de 15/9 es igual a: " + dosdecimales);

// -----------Ejercicio 1.4
let y2 = 10;
let z2 = 5;
x2 = y2+z2;
console.log("El resultado del ejercicio 1.4 es:",x2);

// -----------Ejercicio 1.5
let y3 = 10;
let z3 = 5;
x3 = y3*z3;
console.log("El resultado del ejercicio 1.5 es:",x3);







