// Modify the code of makeCounter() so that the counter can also decrease and set the number:

function makeCounter() {
  // instead of:
  let count = 0

  function counter() {
    return count;
  }

  counter.set = (value) => {
    count = value
    return count
  }

  counter.increase = () => count ++

  counter.decrease = () => count--

  return counter;
}

let counter = makeCounter();
console.log( counter() ); // 0
counter.increase()
console.log( counter() ); // 1
counter.set(10)
console.log(counter())
counter.decrease()
console.log(counter())