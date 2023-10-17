function caesarCipher(str) {
    let letters = str.replace(/[A-Z]/g, each => String.fromCharCode(each.charCodeAt(0) % 26 + 65))
    return letters
}

console.log(caesarCipher('SERR CVMMN'));

module.exports = caesarCipher