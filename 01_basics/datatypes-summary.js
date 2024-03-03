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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory
// Stack (primitive), Heap (Non - primitive)

let a = "Hello";
let b = a;
b = "namaste"

console.log(a);
console.log(b);

let User1 = {
    userName : "roman clare",
    userId : "rclare"
}

let User2 = User1;
User2.userName = "hsoni";

console.log(User1.userName);
console.log(User2.userName);