// Write a function aclean(arr) that return an array cleaned from anagrams

const aclean = (words) => {

  let map = new Map()

  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  }

  return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)) // "nap,teachers,ear" or "PAN,cheaters,era"