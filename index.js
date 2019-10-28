// Code your solution here
function findMatching(drivers, string) {
    let matchingDrivers = drivers.filter (driver => {
        return driver.toLowerCase() === string.toLowerCase();
    })

    return matchingDrivers;
}   

function fuzzyMatch(drivers, string) {
    let matchingDrivers = drivers.filter (driver => {
        return driver.startsWith(string)
    })

    return matchingDrivers
}

function matchName(drivers, string) {
    let matchingDrivers = drivers.filter (driver => {
       return driver.name == string;
    })

    return matchingDrivers;
}