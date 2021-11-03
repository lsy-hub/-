const mongoose = require('./db')
const gamelistSchema = new mongoose.Schema({
    title: String,
    id: String,
    describe: String,
    introduce: Array,
    customAttributes: Object,
    images: Array,
    tagss: Object,
    price: Object,
    outputs: Array
})

const gamelistModel = mongoose.model('gamelist', gamelistSchema, 'gamelist');

module.exports = gamelistModel;