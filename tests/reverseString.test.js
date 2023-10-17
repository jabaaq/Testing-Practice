const reverseString = require('../scripts/reverseString')

test('reverseString should return a reversed string', () => {
    expect(reverseString("hello")).toBe("olleh")
    expect(reverseString("Jaba")).toBe("abaJ")
})