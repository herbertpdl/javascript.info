// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function delay(func, ms) {
  return function() {
    setTimeout(() => func.apply(this, arguments), ms)
  }
}

function f(x) {
  console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 2000);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms