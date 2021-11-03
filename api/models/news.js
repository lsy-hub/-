const mongoose = require('./db')
const newslistSchema = new mongoose.Schema({
    title: String,
    id: String,
    img: String,
    author: String,
    date: String,
    short: String,
    content: String,
})

const newslistModel = mongoose.model('news', newslistSchema, 'news');

module.exports = newslistModel;