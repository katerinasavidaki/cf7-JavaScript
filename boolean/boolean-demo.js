console.log(Boolean(1))         // true
console.log(Boolean(0))         // false
console.log(Boolean("Hello"))   // true
console.log(Boolean(""))        // false
console.log(Boolean(null))        // false
console.log(Boolean(undefined))   // false
console.log(Boolean({}))    // true
console.log(Boolean([]))    // true


while (1) {
  console.log("hello")
  break;
}

do {
  console.log("One iteration")
} while (0)

for (let i = 1; 1; i++) {
  console.log("Break or it's endless")
  break;
}  

let num = 10;
while (num) {
  console.log(num)
  num--
}

// && || !
console.log("Coding" && 7);     // truthy && truthy  -> it returns the last-truthy value
// truthy && falsy, first falsy - > returns the first-falsy value

console.log("User" || "Default")   // First truthy value ή το last falsy αν ολα ειναι false

const username = "" || "Default"
let isBtnExists = true;
let button = "Button"
const buttonToShow = isBtnExists && button