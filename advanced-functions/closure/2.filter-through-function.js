// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
// The usage must be like this:

// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
// arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].

function inBetween(minorValue, biggerValue){
  return function(value) {
    if (value >= minorValue && value <= biggerValue) {
      return true
    }
  }
}

function inArray(values) {
  return function(value) {
    if (values.includes(value)) {
      return true
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.filter(inBetween(3, 6)))
console.log(arr.filter(inArray([1, 2, 10])))