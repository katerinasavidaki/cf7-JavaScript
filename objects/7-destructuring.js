const [a, b] = [1, 2]   // Array destructure

const person = {
  firstname: "Alice",
  age: 25,
  city: "Athens"
}

const { firstname, age, city } = person   // Object destructure
console.log(firstname, age, city)

const { firstname: first, age: newAge, city: myCity } = person
console.log(first, newAge, myCity)