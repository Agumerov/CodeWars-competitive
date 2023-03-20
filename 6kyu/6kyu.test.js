const deepCount = require("./deepArray");
const findOdd = require("./findTheOdd");
const sum35 = require("./sum3&5");

describe('6kyu', () => {
    test('find the odd', () => {
        expect(findOdd([7])).toBe(7)
        expect(findOdd([0])).toBe(0)
        expect(findOdd([1,1,2])).toBe(2)
        expect(findOdd([0,1,0,1,0])).toBe(0)
        expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4)
        expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toBe(5)
        expect(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])).toBe(5)
        expect(findOdd([10])).toBe(10)
        expect(findOdd([7])).toBe(7)
        expect(findOdd([7])).toBe(7)
    });
    test('sum35', () => {
        expect(sum35(0)).toBe(0)
        expect(sum35(10)).toBe(23)
        expect(sum35(20)).toBe(78)
        expect(sum35(30)).toBe(195)
        expect(sum35(40)).toBe(368)
        expect(sum35(50)).toBe(543)
        expect(sum35(60)).toBe(810)
    });
    test('deep array', () => {
        expect(deepCount([])).toBe(0)
        expect(deepCount([1, 2, 3])).toBe(3)
        expect(deepCount(["x", "y", ["z"]])).toBe(4)
        expect(deepCount([1, 2, [3, 4, [5]]])).toBe(7)
        expect(deepCount([[[[[[[[[]]]]]]]]])).toBe(8)
    })
})