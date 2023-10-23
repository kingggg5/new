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

module.exports = router;
