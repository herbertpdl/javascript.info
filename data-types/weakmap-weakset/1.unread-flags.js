let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
]

const readMessages = new WeakSet()

// messages have been read
for(let message of messages) {
  readMessages.add(message)
}

// read the first message again
readMessages.add(messages[0])
// readMessages still has just 3 unique elements

messages.shift()
// now readMessages have just 2 elements (technically memory may be cleaned later)