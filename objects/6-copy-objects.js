const initial = {name: "Alice", age: 30, address: { street: "Patission", number: 76 }}

// 1. With spreading. Spread operator gives a shallow copy
const copyInitial = {...initial}  
console.log(copyInitial)

// 2. Object type
const copyInitial2 = Object.assign({}, initial)

// 3. With JSON function --Deep copy (Cannot copy function inside of an object or undefined values)
const copyInitial3 = JSON.parse(JSON.stringify(initial)) 

// escapes the undefined key-value
const initial2 = {name: "Alice", age: undefined, address: { street: "Patission", number: 76 }}
console.log(JSON.stringify(initial2))

// 4. Deep copy
const copyInitial4 = structuredClone(initial)