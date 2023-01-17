const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!!");
//     // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS THE RESPONSE");
//     res.send("<h1>This is my webserver</h1>")
// })

app.get('/', (req, res) => {
    res.send("Welcome to the homepage!!!");
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1> Browsing the ${subreddit} subreddit<h1>`);
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { postID } = req.params;
    res.send(`<h1> Browsing the ${postID} post<h1>`);
})

app.post('/cats', (req, res) => {
    res.send("Post request to /cats. This is different from an get request")
})

app.get('/cats', (req, res) => {
    res.send("MEOW!!!");
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!!!");
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Nothing Found if Nothing Searched")
    } else {
        res.send(`<h1> Search results for: ${q}</h1>`);
    }
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})


app.listen(8080, () => {
    console.log("Listening on Port 8080!");
})