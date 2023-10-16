const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const {
    userCreate,
    userLogin
} = require('../controllers/userController');

router.get('/login', userLogin);

router.post('/create',
    [
        check('name').isLength({min:4}),
        check('email').isEmail(),
        check('password').isLength({min:8})
    ]
    , userCreate);

module.exports = router;
