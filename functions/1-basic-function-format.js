// 1. Basic function definition
function greet(name) {
  return `Hello, ${name}`;
}

function add(a, b) {
  return a + b;
}

console.log(greet("Alice"))

// 2. Function Expressions
const mul = function (a, b) {
  return a * b;
}

let result = mul(3, 4);
console.log(result);

// 3. Arrow functions
const div = (a, b) => a / b;