const students = ['Alice', 'Andreas', 'Bob', 'Costas', 'Andreas']

students.forEach(function(value, index, arr) {        // , _ -> ignore indexes position 
  console.log(value, index, arr)
})

let filtered = students.filter(student => student === 'Andreas')    // makes a new array
console.log(filtered)

let mapped = students.map(student => "Student: " + student)     // H map αντιστοιχεί κάθε στοιχείο σε κάτι άλλο
console.log(mapped)

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val) => total + val, 0)      // To total συγκεντρώνει το τελικό sum, το val είναι η αρχική τιμη
console.log(sum)