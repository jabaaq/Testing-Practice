const calculator = require('../scripts/calculator')

test("'Each of these functions from the calculator object should take two numbers and return the correct calculation.", () => {
    expect(calculator.add(1, 2)).toBe(3)
    expect(calculator.subtract(5, 2)).toBe(3)
    expect(calculator.divide(10, 2)).toBe(5)
    expect(calculator.multiply(10, 3)).toBe(30)
})