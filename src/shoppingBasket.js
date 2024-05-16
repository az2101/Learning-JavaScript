class ShoppingBasket {
    constructor(candys) {
        this.candys = candys;
        this.items = [];
    }
    addItem(candys) {
        this.items.push(candys);
    }
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getPrice(), 0);
    }
}

module.exports = ShoppingBasket

