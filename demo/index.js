const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000
var bodyParser = require('body-parser')
const forgotPassword = require('../lib/router.js')
const database = require('./config/database')

const app = express();

//x-www-form-urlencode
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())
database()


app.use('/api/v1', forgotPassword);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})

module.exports = app