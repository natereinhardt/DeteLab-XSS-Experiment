var Comment = require('./comment');


module.exports.create = function (newComment, res) {
    var comment = new Comment();
    newComment.message = comment.message;
    newComment.user = comment.user;

    repo.save(function (err, result) {
        res.json(result);
    });
};

module.exports.list = function (req, res) {
    Comment.find({}, function (err, results) {
        res.json(results);
    });
};
