const obj = { id: 1, firstname: "Alice" }

// Add properties

// Modify the object
// obj.lastname = "W."
// console.log(obj)

// Immutable - fresh copy
const addToObject = (obj, field, value) => ( {...obj, [field]: value} )
const objCopy = addToObject(obj, "lastname", "W.")
console.log(objCopy)

// Update the object

// Modifies / updates the obj
// obj.firstname = "Al"
// console.log(obj)

// Immutable - fresh copy
const updateObj = (obj, field, newValue) => ({ ...obj, [field]: newValue })
const updatedObj = updateObj(obj, "firstname", "Al")
console.log(updatedObj)

// Delete a property of an object

// Immutable delete
const deleteIdFromObject = (obj, field) => {
  const {[field]: _, ...objToReturn } = obj
  return objToReturn
}
// ( ... is called rest and it behaves as an object or as an array in other circumstances)

const objFromDelete = deleteIdFromObject(obj, "id")
console.log(objFromDelete)