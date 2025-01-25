console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)     // 12/0
console.log(Number.NEGATIVE_INFINITY)

if (Number.isInteger(12)) {
  console.log("Is integer")
} else {
  console.log("Not integer")
}

if (Number.isNaN("hello")) {    // 10/"AUEB"
  console.log("True")
} else {
  console.log("False")
}

if (isNaN("Hello")) {
  console.log("Is NaN")
} else {
  console.log("Not NaN")
}

console.log(Number.parseInt("44"))
console.log(parseInt("43"))

console.log(Number.parseFloat("44.8"))
console.log(parseFloat("43.2"))

const num1 = 0.1 + 0.2
const num2 = 0.3

function compareFloatingPoints(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}
console.log(compareFloatingPoints(num1, num2))

