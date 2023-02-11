const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isadmin) {
        next();
    } else {
        res.send("Sorry NOT an Admin");
    }
})

router.get('/topsecret', (req, res) => {
    res.send('This is top Secret');
})

router.get('/deleteeverything', (req, res) => {
    res.send('Ok Deleted It All');
})

module.exports = router;