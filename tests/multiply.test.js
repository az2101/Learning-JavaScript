
const multiply = require('../src/multiply');

describe('multiply', () => {
    it('multiplies 2 and 3', () => {
        expect(multiply(2, 3)).toBe(6);
    })
    it('multiplies 4 and 5', () => {
        expect(multiply(4, 5)).toBe(20);
    })
})