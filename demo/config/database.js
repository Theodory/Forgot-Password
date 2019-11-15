const mongoose = require('mongoose');

const constants = require('./variables');

module.exports = () => {
    mongoose.Promise = global.Promise;

    try {
        mongoose.connect(process.env.DB_DATABASE, {
            useNewUrlParser: true
        });
    } catch (err) {
        mongoose.createConnection(process.env.DB_DATABASE);
    }

    mongoose.connection
        .once('open', () => console.log(`Database is running on: ${ process.env.DB_DATABASE}`))
        .on('error', e => {
            throw e;
        });
}