'use strict';

const { signup, allUser, login } = require('../controllers/userControllers');
const userAuth = require('../middlewares/userAuth');
const bearerAuth = require( '../middlewares/bearer-auth' );

const router = require('express').Router();

router.post('/signin', login);
router.post('/signup', userAuth.saveUser, signup)
router.get( '/users', allUser );

module.exports = router;