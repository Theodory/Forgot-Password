const axios = require('axios')
const User = require('./model')


exports.index = async(req, res) => {

    // return res.status(200).json(req.body)
    // axios({
    //     method: 'post',
    //     url: 'https://notification.nexus.co.tz/api/v1/dispatcher/email',
    //     data: {
    //         from: "niajiritz@gmail.com",
    //         to: "theodoryf@gmail.com",
    //         subject: "Hello",
    //         html: "Hello"
    //     }
    // }).then(response => {
    //     return res.status(200).json(response.data)
    // }).catch(err => {
    //     return res.json(err)
    // })

    if (req.body.email === '') {
        return res.status(200).json('Email is required')
    }

    User.findOne({
        email: req.body.email

    }).then(user => {
        return res.status(200).json(user)
    })



}