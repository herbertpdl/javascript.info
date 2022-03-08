// Write function sum that works like this: sum(a)(b) = a+b.

function sum(firstValue) {
  return function(secondValue) {
    return firstValue + secondValue
  }
}

console.log(sum(1)(2))
console.log(sum(5)(-1))