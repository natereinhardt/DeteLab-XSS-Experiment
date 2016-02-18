var mongoose = require('mongoose');

module.exports = mongoose.model('comment', {
    message: String,
    user: String

});