const axios = require('axios')
const bcrypt = require('bcryptjs');
const User = require('./model')
const jwt = require('jsonwebtoken')


exports.index = async(req, res) => {


    if (req.body.email === '') {
        return res.status(200).json('Email is required')
    }

    User.findOne({
            email: req.body.email
        })
        .then(user => {
            var token = jwt.sign({
                user
            }, 'shhhhh');
            let url = process.env.BASE_URL + `/reset/${token}`


            // axios({
            //     method: 'post',
            //     url: 'https://notification.nexus.co.tz/api/v1/dispatcher/email',
            //     data: {
            //         from: "niajiritz@gmail.com",
            //         to: "theodoryf@gmail.com",
            //         subject: "Hello",
            //         html: `Reset Password Link ${ process.env.BASE_URL}/${token}`
            //     }
            // }).then(response => {
            //     return res.status(200).json(response.data)
            // }).catch(err => {
            //     return res.json(err)
            // })

            return res.status(200).json(url)
        })

}