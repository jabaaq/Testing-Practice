function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('hello world!'));

module.exports = reverseString