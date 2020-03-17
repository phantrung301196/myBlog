'use strict';
module.exports = function(app) {
    let postCtrl = require('./controllers/PostController');

    // todoList Routes
    app.route('/posts')
        .get(postCtrl.getAllPosts);

    app.route('/posts/:segment/:offset')
        .get(postCtrl.getPost);

    app.route('/posts/:id')
        .get(postCtrl.getPostDetail);
};