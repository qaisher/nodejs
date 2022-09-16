const numbers = [ 2, 4, 5, 2, 6, 7];

const names = ['John', 'Mike', 'Karan', 'Arjun'];


// exports.customMessage = 'this is a custom text';
// exports.myNumber = 22;

//exporting single thing

//module.exports = numbers; //exported to the object where require is set


//exporting multiple things

module.exports = {
    numbers : numbers,
    names : names
}


