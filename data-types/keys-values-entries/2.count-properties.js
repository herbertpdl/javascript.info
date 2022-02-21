// Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

const count = (obj) => {
  return Object.keys(obj).length
}

console.log(count(user)) // 2