function findMatching(array, string){
    return array.filter(driver => 
        driver.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

  function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }