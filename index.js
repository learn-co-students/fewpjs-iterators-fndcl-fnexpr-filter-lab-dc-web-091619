function findMatching (array, string) {
    let result = array.filter(name =>{
        return name.toLowerCase()=== string.toLowerCase();
    })
    return result
}
function fuzzyMatch (array, string){
    let result = array.filter(name=>{
        return string.toLowerCase() === name.substring(0,string.length).toLowerCase();
    })
    return result
}


function matchName(array, string) {
    let result = array.filter(hash =>{
        return hash.name === string;
    })
    return result
}