const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)
exams.some(score => score >= 75)



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

movies.some(movies => movies.year > 2000);

const allEvens = nums => nums.every(num => num % 2 === 0);