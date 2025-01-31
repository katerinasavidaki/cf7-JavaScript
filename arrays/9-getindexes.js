const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

// function να επιστρέφει πίνακα με τις θέσεις
// στις οποίες βρίσκεται ένας συγκεκριμένος αριθμός


function findPosition(array, number) {
  const positions = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      positions.push(i)
    }
  }
  return positions
}

console.log(findPosition(arr, 2))

const getIndexes = (arr, val) => {
  const indexes = []

  arr.forEach((v, index) => {
    if (v === val) {
      indexes.push(index)
    }
  })
  
  // arr.forEach(function(v, index) {
  //   if (v === val) {
  //     indexes.push(index)
  //   }
  // })
  return indexes
}

console.log(getIndexes(arr, 2))
