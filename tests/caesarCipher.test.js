const caesarCipher = require('../scripts/caesarCipher')

test('CaesarCipher should returns a string with each character “shifted” ', () => {
    expect(caesarCipher('SERR CVMMN')).toBe('FREE PIZZA');
    expect(caesarCipher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');
});