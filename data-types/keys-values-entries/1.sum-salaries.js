// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = (salaries) => {
  let sum  = 0

  for (let salary of Object.values(salaries)) {
    sum += salary
  }

  return sum
}

console.log( sumSalaries(salaries) ); // 650