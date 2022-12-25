const scores = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { email, firstName, lastName, city, bio } = user;

const { born: birthYear, died: deathYear = 'N/A' } = user;

const { city, state, died = 'N/A' } = user2;

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user) {
//     const { firstName, lastName } = user
//     return `${firstName} ${lastName}`
// }

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}


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

// movies.filter((movie) => movie.score > 90)

// movies.filter(({ score }) => score > 90)

// movies.map((movie) => `${movie.title} (${movie.year}) is rated ${movie.score}`)

movies.map(({ title, score, year }) => `${title} (${year}) is rated ${score}`)


