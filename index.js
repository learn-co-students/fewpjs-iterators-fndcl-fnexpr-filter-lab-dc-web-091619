// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toUpperCase() === string.toUpperCase();
    })
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        return driver.slice(0, letters.length) === letters;
    })
}

function matchName(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.name === string
    })
}