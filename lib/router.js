const express = require('express')
const router = express.Router()
const forgotPasswordController = require('./controller.js')
const validations = require('./validations')

router.post('/', validations.forgotPassword, forgotPasswordController.index)

router.post('/reset-password', forgotPasswordController.resetPassword)

module.exports = router