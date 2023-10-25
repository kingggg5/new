const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();

// Signup route
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', (req, res) => {
  // Handle signup form submission (create user)
});

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res, next) => {
  // Handle login form submission (passport authentication)
});

router.get('/acc', (req, res) => {
  res.render('acc');
});

router.post('/acc', (req, res, next) => {
  // Handle login form submission (passport authentication)
});
// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// "Buy Now" route (protected)
router.get('/topup', isLoggedIn, (req, res) => {
  res.redirect('/topup'); // Redirect to the topup page when "buy now" is clicked
});

router.get('/cart', (req, res) => {
  res.render('cart.ejs', { products: products });
});

// Middleware to check if a user is authenticated
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login'); // Redirect to the login page if not authenticated
}


module.exports = router;
