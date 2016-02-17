var repoCtrl = require('./repository/repoCtrl')
var fileCtrl = require('./file/fileCtrl')

module.exports = function(app) {

// =============================Server Routes ===========================================================
    //Repo Api Endpoints
    app.get('/api/comment', repoCtrl.list);

//============================= Frontend Routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('index.html', { root: './client' })
    })

}