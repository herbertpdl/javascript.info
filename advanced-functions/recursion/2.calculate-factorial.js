// The task is to write a function factorial(n) that calculates n! using recursive calls.

const factorial = (n) => {
  return n !== 1 ? n * factorial(n-1) : 1
}

console.log(factorial(5))