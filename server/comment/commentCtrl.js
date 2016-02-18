var Comment = require('./comment');


module.exports.create = function (req, res) {
   var newComment = req.params.comment;
    var comment = new Comment();
    comment.message = newComment;

    comment.save(function (err, result) {
        res.json(result);
    });
};

module.exports.list = function (req, res) {
    Comment.find({}, function (err, results) {
        res.json(results);
    });
};
