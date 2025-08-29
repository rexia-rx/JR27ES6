// #1
let tName = "Alice";
if (true) {
    // Due to the scope relationship, direct assignment is required, 
    // otherwise the desired effect cannot be achieved.
    tName = "Bob";  
    console.log(tName);
}
console.log(tName);

// #2
// The key word of this represents the object itself in a normal function. 
// The key word of this represents the scope in an arrow function.
const add = (a, b) => a + b; 

// #3
let greeting = `Hello, ${tName}! Welcome to the course.`;

// #4
const person = {
  pName: "Alice",
  age: 25,
  city: "Sydney"
};

const { pName, age } = person;

console.log(pName); // "Alice"
console.log(age);  // 25

function introduce({ pName, age }) {
  return `Hi, my name is ${pName} and I am ${age} years old.`;
}

console.log(introduce(person));
// 输出: "Hi, my name is Alice and I am 25 years old."

// #5
function calculateArea(width, height = width) {
  return width * height;
}

// #6
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

let arr1 = [1, 2];
let arr2 = [3, 4];

let merged = [...arr1, ...arr2];

console.log(sum(1, 2, 3, 4)); // 10
console.log(merged);          // [1, 2, 3, 4]
