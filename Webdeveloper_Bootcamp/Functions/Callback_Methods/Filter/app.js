nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 23, 44, 54, 76, 87];

nums.filter(n => {
    return n < 10
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

const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

const goodTitles2 = movies
    .filter(m => m.score > 80)
    .map(m => m.title)

const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 1990)


function validUserNames(usernames) {
    return usernames.filter(u => u.length < 10)
}