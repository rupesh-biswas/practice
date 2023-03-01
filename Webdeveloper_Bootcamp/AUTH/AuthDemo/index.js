const express = require('express');
const app = express();
const User = require('./models/user');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(() => {
        console.log("MONGO Connection Open!!!");
    })
    .catch((err) => {
        console.log("Oh No MONGO Connection Error!!!");
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.send('This is the homepage');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('Nuclear Code here');
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    // req.session.destroy();
    res.redirect('/login');
})



app.listen(3000, () => {
    console.log("Serving Your APP @ http://localhost:3000")
})