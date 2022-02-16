let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

const readDates = new WeakMap()

// messages have been read
for(let message of messages) {
  // save the date that the message was read
  readDates.set(message, new Date())
}

messages.shift()
// now the readDates will have just 2 elements (technically memory may be cleaned later)