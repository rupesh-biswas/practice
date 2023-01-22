const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Connection Established");
    })
    .catch((err) => {
        console.log("Oh No Error");
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({ title: 'Amadeus', year: 1996, score: 9.2, rating: "R" })
// amadeus.save();

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("IT Worked!");
//         console.log(data);
//     })

// Movie.findOne({year:{$lt:1990}}).then(data=>console.log(data))

// Movie.findOneAndUpdate({title:'The Iron Giant'}, {score:7.8}, {new:true})
// .then(data=>console.log(data))


Movie.remove({ title: 'Amelie' }).then(msg => console.log(msg))
Movie.deleteMany({ year: { $gte: 1999 } }).then(msg => console.log(msg))
Movie.findOneAndDelete({ title: 'Alien' }).then(m => console.log(m));
