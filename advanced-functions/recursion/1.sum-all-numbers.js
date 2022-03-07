// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// Using for loop
const sumWithFor = (n) => {
  let result = n

  for (let i = n - 1; i > 0; i--) {
    result += i
  }

  return result
}

// Using recursion
const sumWithRecursion = (n) => {
  if (n === 1) {
    return 1
  } else {
    return n + sumWithRecursion(n - 1)
  }
}

console.log(sumWithFor(100))
console.log(sumWithRecursion(100))