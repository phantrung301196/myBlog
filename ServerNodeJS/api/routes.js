'use strict';

module.exports = function(app) {
    let postCtrl = require('./controllers/PostController');
    let upload = require('../ImageHandle/uploadMiddleware');

    // todoList Routes
    app.route('/posts').get(postCtrl.getAllPosts);

    app.route('/posts').post(upload.single('postImg'), postCtrl.savePost);

    app.route('/posts/:segment/:offset').get(postCtrl.getPost);

    app.route('/posts/:id').get(postCtrl.getPostDetail);

    app.route('/upload').post(upload.single('image'), (req, res, next) => {
        console.log(req.file);
        if (!req.file) {
            res.status(500);
            return next(err);
        }
        res.json({ fileUrl: 'http://localhost:3000/images/' + req.file.filename });
    })
};