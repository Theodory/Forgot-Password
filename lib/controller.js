const axios = require('axios')
const bcrypt = require('bcryptjs');
const User = require('./model')
const jwt = require('jsonwebtoken')
const {
    validationResult
} = require('express-validator');


exports.index = async(req, res) => {

    if (req.body.email === '') {
        return res.status(200).json('Email is required')
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    await User.findOne({
            email: req.body.email
        })
        .then(user => {
            var token = jwt.sign({
                user
            }, 'shhhhh', {
                expiresIn: '1h'
            });

            let url = process.env.BASE_URL + `/reset/${token}`

            axios({
                method: 'post',
                url: 'https://notification.nexus.co.tz/api/v1/dispatcher/email',
                data: {
                    from: "niajiritz@gmail.com",
                    to: "theodoryf@gmail.com",
                    subject: "Hello",
                    html: `Reset Password Link ${url}`
                }
            }).then(response => {
                return res.status(200).json(response.data)
            }).catch(err => {
                return res.json(err)
            })
        })

}

// Reset Password
exports.resetPassword = async(req, res) => {

    const {
        password,
        confirm_password,
        token
    } = req.body

    try {
        jwt.verify(token, 'shhhhh', function(err, user) {
            if (err) {
                return res.status(200).json("Invalid User")
            }

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.array()
                });
            }

            let salt = bcrypt.genSaltSync(10);
            let newPassword = bcrypt.hashSync(password, salt);
            //return res.status(200).json(user.user.email)
            User.findOne({
                email: user.user.email
            }).then(async user => {
                user['password'] = newPassword;
                await user.save();

                return res.status(200).json(user)
            })

        })
    } catch (err) {
        return res.status(500).json("Error Ocurred")
    }

}