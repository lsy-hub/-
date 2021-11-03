const mongoose = require('./db')
const userlistSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: Number,
    nikename: String,
})

const userlistModel = mongoose.model('user', userlistSchema, 'user');

module.exports = userlistModel;