const axios = require('axios')
const bcrypt = require('bcryptjs');
const User = require('./model')
const jwt = require('jsonwebtoken')


exports.index = async(req, res) => {

    if (req.body.email === '') {
        return res.status(200).json('Email is required')
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


            if (password !== confirm_password) {
                return res.status(200).json("Passwords didn't match")
            }

            let salt = bcrypt.genSaltSync(10);
            let newPassword = bcrypt.hashSync(password, salt);
            //return res.status(200).json(user.user.email)
            User.findOne({
                email: user.user.email
            }).then(user => {
                user['password'] = newPassword;
                user.save();

                return res.status(200).json(user)
            })

            // User.update({
            //         _id: user.id
            //     }, {

            //         password: newPassword,
            //     })
            //     .then((user) => {
            //         return res.status(200).json(user)
            //     })

            // let p = User.update({
            //     _id: user._id
            // }, {
            //     name: 'jason bourne'
            // }, function(p) {
            //     return res.status(200).json(p)
            // })



        })
    } catch (err) {
        return res.status(500).json("Error Ocurred")
    }

}