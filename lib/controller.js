const axios = require('axios')
const User = require('./model')


exports.index = async(req, res) => {

    let user = await User.create(req.body)

    return res.status(200).json(user)
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

}