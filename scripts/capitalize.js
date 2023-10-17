function capitalize(str) {
    let firstChar = str[0].toUpperCase()
    let otherChars = str.split('').slice(1, str.length).join('')
    return firstChar + otherChars
}

console.log(capitalize('jaba'));


module.exports = capitalize 