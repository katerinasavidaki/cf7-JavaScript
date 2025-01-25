const s = "Coding Factory"
const s1 = "CODING Factory"
const replaced = s.replace("Coding", "Code")
const lower = s.toLowerCase()
const upper = s.toUpperCase()

if (s.toUpperCase() === s1.toUpperCase()) {
  console.log("EQUALS")
}

const firstname = "Alice     "
if (firstname.trim() === "Alice") {
  console.log("OK")
}

console.log("Coding".repeat(10))

const concat = s + s1 + "goodnight"
const concat2 = s.concat(s1).concat("Bye")