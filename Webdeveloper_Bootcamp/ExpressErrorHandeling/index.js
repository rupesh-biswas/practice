const express = require('express');
const app = express();
const morgan = require('morgan')

const AppError = require('./appError.js');

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
        // res.send('Sorry you Need A password!!')
        // res.status(401)
        // throw new Error('Password required')
        throw new AppError('password required App Error', 401);
    }
}


app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page');
})

app.get('/error', (res, req) => {
    chicken.nuggets();
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof Woof');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My Secret is: Sometimes I wear headphones in public so that I dont have to talk to anyone');
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})

app.use((req, res) => {
    res.status(404).send('Not Found!');
})


// app.use((err, req, res, next) => {
//     console.log("*********************************")
//     console.log("**************ERROR**************")
//     console.log("*********************************")
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message);
    // next(err);
})


app.listen(3000, () => {
    console.log('App is running on localhost:3000');
})