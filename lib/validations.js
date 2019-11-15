const {
    check
} = require('express-validator');

exports.forgotPassword = [
    check('email').isEmail().withMessage('Email is invalid')
]