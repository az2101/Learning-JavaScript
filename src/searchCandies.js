
const searchCandies = (prefix, maxPrice, candies) => {
    return candies.filter(candy => candy.name.toLowerCase().startsWith(prefix.toLowerCase()) && candy.price < maxPrice).map(candy => candy.name);
}

module.exports = searchCandies;
