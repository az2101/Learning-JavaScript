
const add = require('../src/add.js');

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2, 2)).toBe(4);
    });
});