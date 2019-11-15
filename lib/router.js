const express = require('express')
const router = express.Router()
const forgotPasswordController = require('./controller.js')

router.post('/', forgotPasswordController.index)

router.post('/reset-password', forgotPasswordController.resetPassword)

module.exports = router