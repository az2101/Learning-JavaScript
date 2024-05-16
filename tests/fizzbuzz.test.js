
const fizzbuzz = require('../src/fizzbuzz.js');

describe('fizzbuzz', () => {
    it('returns Fizz for 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    })
    it('returns Buzz for 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    })
    it('returns 8 for 8', () => {
        expect(fizzbuzz(8)).toBe(8);
    })
    it('returns FizzBuzz for 15', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    })
    it('returns Fizz for 18', () => {
        expect(fizzbuzz(18)).toBe('Fizz');
    })
    it('returns Buzz for 20', () => {
        expect(fizzbuzz(20)).toBe('Buzz');
    })
})
