// alert ("Java Script funcionando perfectamente")

// -----------Iteration#1

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
const toy1 = {
    name: "Buss LightYear",
    price: 19,
}

const toy2 = {
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

// -----------Iteration#4
// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"

avengers[0] = "IRONMAN";
console.log(avengers);

//1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.

window.alert("La longitud del array Avengers es " + (avengers.length));

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters1.push("Morty","Summer");
console.log(rickAndMortyCharacters1);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
console.log("Del Array " + rickAndMortyCharacters);
console.log("Se ha eliminado el elemento " + rickAndMortyCharacters.pop());

console.log("El primer y último elemento del array son, respectivamente: " + rickAndMortyCharacters[0] + " y " + rickAndMortyCharacters[(rickAndMortyCharacters.length-1)]);

// -----------Iteration#6
console.log("Crea un bucle for que vaya desde 0 a 9 y muestralo por consola:");

for (let a=0; a<10; a++) {
    console.log(a);
}

console.log("Muestra solo los múltiplos de 2");
for (let i=0; i<10; i++) {
    if ((i%2)===0){console.log(i);}
    else console.log("---");
    
}

console.log("Crea un bucle para dormir contando ovejas:");

for (let b=1; b<11; b++) {
    if (b<10) console.log(b, "Intentando dormir");
    if (b===10) console.log ("Dormido!");

};