const Candy = require('../src/candy')

describe('Candy', () => {
    it('should return correct name and price', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.getName()).toBe('Mars');
        expect(candy.getPrice()).toBe(4.99);
    })
})