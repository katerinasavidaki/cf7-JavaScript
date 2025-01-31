const arr = [1, 2, 3, 4]
delete arr[0]

console.log(arr)

arr.push(5)     // it pushes the element into the same array. It doesn't create a new one
arr.push(6, 7)
console.log(arr)