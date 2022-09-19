'use strict';

const { signup, allUser, login } = require('../controllers/userControllers');
const userAuth = require('../middlewares/userAuth');

const router = require('express').Router();
// const {Comment } = require('../models/index');



router.post('/login', login);
router.post('/signup', userAuth.saveUser, signup)
router.get('/users', allUser)

module.exports = router;