const express = require('express');
const app = express();
const session = require('express-session');

const seesionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false };
app.use(session(seesionOptions));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have view this page ${req.session.count} times`);
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome Back, ${username}`);
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})