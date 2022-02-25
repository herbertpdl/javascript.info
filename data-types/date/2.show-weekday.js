// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

let date = new Date(2012, 0, 3)  // 3 Jan 2012

const getWeekDay = (date) => {
  return date.toDateString().split(' ')[0]
}

const anotherGetWeekDay = (date) => {
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

  return days[date.getDay()]
}

console.log(anotherGetWeekDay(date))        // should output "TU"