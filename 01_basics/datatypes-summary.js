// Primitive
// 7 types - String, Number, null, undefined, boolean, symbol, BigInt

// JS Dynamically Typed language

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

//let number = 64653456329403632026n;

// Non - primitive / Rference type
// Array, Objects, Functions

const heros = ["Roman","Edward","Adam"];
let myObj = {
    name : "Harry",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof(myFunction));