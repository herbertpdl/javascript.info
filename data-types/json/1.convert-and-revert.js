// Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

let encodedUser = JSON.stringify(user)

let decodedUser = JSON.parse(encodedUser)

console.log(encodedUser)
console.log(decodedUser)