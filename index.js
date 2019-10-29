function findMatching(drivers, name){
  let matches = drivers.filter(driver => {return driver.toLowerCase() === name.toLowerCase()});
  return matches;
}

function fuzzyMatch(drivers, name){
  let nameLength = name.length;
  let matches = drivers.filter(driver => {return driver.slice(0,nameLength) === name});
  debugger
  return matches;
}

function matchName(drivers, name){
  let matches = drivers.filter(function(driver){
    return driver.name === name
  });
  
  return matches;
}

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