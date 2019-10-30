// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){

  let dr = drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase();
  });
  return dr
}

function fuzzyMatch(drivers, name){

  let dr = drivers.filter(driver => {
      return driver.toLowerCase().split('')[0] === name.toLowerCase().split('')[0];
  });
  return dr
}

function matchName(drivers, drname){

  let dr = drivers.filter(driver => {
    return driver.name === drname;
  });
  return dr
}

fuzzyMatch(drivers, 'Bobby')
