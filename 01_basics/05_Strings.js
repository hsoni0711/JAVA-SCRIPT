const Name = "Himmat";
const Surname = "Soni";

//console.log(Name + Surname + " Ok");

// Use string interpolation
console.log(`My surname is ${Surname.toUpperCase()} and name is ${Name}.`);

const name = new String("    Himmat    ");

// console.log(name[1]);
// console.log(name.__proto__);

console.log(name.length);
console.log(name.toUpperCase());

console.log(name.charAt(4));
console.log(name.indexOf("i"));
console.log(name.substring(0,3));
console.log(name.slice(-4, 5));
console.log(name.trim());

const url = "https://hi%20hello.com"

console.log(url.replace('%20','-'));
console.log(url.includes("helloo"));

const arr = "hello-my-name-is-himmat"
console.log(arr.split('-'));