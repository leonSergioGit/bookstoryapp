const express = require('express');
const router = express.Router();
const passport = require('passport');


//Auth with google
router.get('/google', passport.authenticate('google', { scope: ['profile']}))


//Callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/dashboard');
})

//Logout user
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;