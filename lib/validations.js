const {
    check
} = require('express-validator');

exports.forgotPassword = [
    check('email').isEmail().withMessage('Email is invalid')
]

exports.resetPassword = [
    check('password').not().isEmpty()
    .isLength({
        min: 6
    }).withMessage('Password must be at least 6 chars long')
    .matches(/\d/).withMessage('Password must contain a number'),
    check('password_confirmation').not().isEmpty().isLength({
        min: 6
    }).withMessage('Password must be at least 6 chars long')
    .matches(/\d/).withMessage('Password must contain a number'),
    check('password_confirmation').custom((value, {
        req
    }) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }
        return true;
    })
]