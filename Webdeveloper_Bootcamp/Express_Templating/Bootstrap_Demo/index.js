const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs', { title: "Homepage" });
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats, title: "All Cats" })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    if (data) {
        res.render('subreddit.ejs', { title: subreddit, ...data })
    } else {
        res.render('notfound', { subreddit, title: subreddit })
    }
})


app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random.ejs', { num, title: "Random Number" });
})

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
})