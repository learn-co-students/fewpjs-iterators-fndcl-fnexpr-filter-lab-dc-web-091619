// // Code your solution here
let driverNames = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  let name = "Bobby"

function findMatching(arr, name){
    return arr.filter(n => n.toLowerCase() === name.toLowerCase())
}

findMatching(driverNames, name)

function fuzzyMatch(arr, name){
    return arr.filter(n => {
        let s = n.split('')
        let t = name.split('')
        return s[0] === t[0]
    })
}

fuzzyMatch(driverNames, name)

function matchName(arr, name){
    return arr.filter(n => n["name"] === name)
}

matchName(drivers, name)