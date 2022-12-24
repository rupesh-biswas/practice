const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min
})

const maxPrice = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    }
    return max
})


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 35,
        year: 2012
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2013
    },
    {
        title: 'Alien',
        score: 40,
        year: 2004
    }
]

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie
})

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100)

