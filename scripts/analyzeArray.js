function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return {
            average: undefined,
            min: undefined,
            max: undefined,
            length: 0
        }
    } else {
        const average = arr.reduce((a, b) => a + b, 0) / arr.length
        const min = arr.sort((a, b) => a - b)[0]
        const max = arr.sort((a, b) => a - b)[arr.length - 1]
        const length = arr.length
        return {
            'average': average,
            'min': min,
            'max': max,
            'length': length
        }
    }


}

// console.log(typeof(analyzeArray([1, 8, 3, 4, 2, 6])));

module.exports = analyzeArray