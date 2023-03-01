const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync')

const users = require('../controllers/users');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

const loginstrategy = passport.authenticate(
    'local',
    {
        failureFlash: true,
        failureRedirect: '/login',
        failureMessage: true,
        keepSessionInfo: true
    });

router.route('/login')
    .get(users.renderLogin)
    .post(loginstrategy, users.login);


router.get('/logout', users.logout)

module.exports = router;