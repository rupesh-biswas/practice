nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 23, 44, 54, 76, 87];

const doubles = nums.map(function (num) {
    return num * 2;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const titles = movies.map(function (movie) {
    return movie.title.toLocaleUpperCase();
})