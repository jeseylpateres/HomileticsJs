var mongoose = require('mongoose');

module.exports = mongoose.model('Home', {
    text: {
        book: String,
        default: ''
    }
});