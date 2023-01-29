const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('tiny'))
app.use((req, res, next) => {
    req.requestTime = Date.now()
    console.log(req.method.toUpperCase(), req.path);
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query
    if (password === 'chickennuggets') {
        next();
    } else {
        res.send('Sorry you Need A password!!')
    }
}


app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page');
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof Woof');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My Secret is: Sometimes I wear headphones in public so that I dont have to talk to anyone');
})

app.use((req, res) => {
    res.status(404).send('Not Found!');
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})