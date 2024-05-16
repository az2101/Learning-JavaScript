const ShoppingBasket = require('../src/shoppingBasket')
const Candy = require('../src/candy')

describe('shoppingBasket', () => {
    let basket;
    let candy;

    beforeEach(() => {
        basket = new ShoppingBasket();
        candy = {
            getName: jest.fn().mockReturnValue('Mars'),
            getPrice: jest.fn().mockReturnValue(4.99)
        };
    })
    it('returns total price 0 for an empty basket', () => {
        expect(basket.getTotalPrice()).toBe(0);
    })
    it('returns the correct price after adding items', () => {
        basket.addItem(candy);
        expect(basket.getTotalPrice()).toBe(4.99);
    }) 
})
