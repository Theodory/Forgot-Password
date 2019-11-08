const express = require('express');
const port = 3000
var bodyParser = require('body-parser')
const forgotPassword = require('./forgotPassword/router.js')


const app = express();

//x-www-form-urlencode
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())


app.use('/api/v1', forgotPassword);

app.listen(port);