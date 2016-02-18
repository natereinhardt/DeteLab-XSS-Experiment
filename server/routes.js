var commentCtrl = require('./comment/commentCtrl');


module.exports = function(app) {

// =============================Server Routes ===========================================================
    //Repo Api Endpoints
    app.get('/api/comment', commentCtrl.list);
    app.post('/api/comment/:comment', commentCtrl.create);

//============================= Frontend Routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('index.html', { root: './client' })
    })

}