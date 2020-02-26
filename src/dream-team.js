module.exports = function createDreamTeam(members) {

    let name = [];

    //check if the argument is an array
    if (!Array.isArray(members)) return false;

    //for each element of the array
    members.forEach(item => {
        //ignore non-string elements in the array
        if (typeof item !== 'string') return false;
        //remove whitespaces from the beginning and the end of the string item
        let itemTrimmed = item.trim();
        //make the first character of the string item uppercase
        let itemUpperCase = itemTrimmed[0].toUpperCase();
        //push the first character of the string item to the new array
        name.push(itemUpperCase);
    });

    name.sort();
    let result = name.join('');
    return result;
};