const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
});

const Joke = mongoose.model('Joke', reviewSchema);

module.exports = Joke;
