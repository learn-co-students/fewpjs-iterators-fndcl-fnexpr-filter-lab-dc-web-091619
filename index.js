// Code your solution here

function findMatching(drivers,string) {
  return drivers.filter(name => name.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(drivers,string) {
    return drivers.filter(name => name[0] === string[0]);
}

function matchName(drivers,string) {
    return drivers.filter(nameObj => nameObj.name === string);
}