const capitalize = require('../scripts/capitalize')


describe('Capitalize ', () => {
    test('Capitalize should return a string with the first character capitalized', () => {
        expect(capitalize("jaba")).toBe("Jaba")
        expect(capitalize('hello world')).toBe('Hello world')
    })
});