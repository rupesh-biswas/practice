
// const add = function (x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x ** 2;
// }

const square = x => {
    return x ** 2;
}


// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

const greet = (name) => {
    return `Hey ${name}!`
}

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a, b) => a + b



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

const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})

const newMovies2 = movies.map(movie => `${movie.title} - ${movie.score / 10}`)

const newMovies3 = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}



