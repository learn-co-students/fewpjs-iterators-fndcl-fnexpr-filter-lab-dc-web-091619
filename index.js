function findMatching(drivers, name) {
  return drivers.filter(ele => ele.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, startwith) {
  return drivers.filter(ele => ele.slice(0, startwith.length) === startwith)
}

function matchName(drivers, namevalue) {
  return drivers.filter(ele => ele.name === namevalue)
}
