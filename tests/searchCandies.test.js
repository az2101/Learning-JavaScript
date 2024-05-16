
const searchCandies = require('../src/searchCandies')

describe('searchCandies', () => {
    const candies = [
        { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
]
it('returns cadies starting with prefix costing less than maxPrice', () => {
    expect(searchCandies('Ma', 10, candies)).toEqual(['Mars', 'Maltesers']);
    expect(searchCandies('Ma', 2, candies)).toEqual(['Mars']);
    expect(searchCandies('S', 10, candies)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    expect(searchCandies('S', 4, candies)).toEqual(['Skitties', 'Skittles']);
})
})
