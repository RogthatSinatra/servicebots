const express = require('express');
var router = express.Router();
const mongo = require('mongodb');
const url = process.env.MONGODB_URI || 'mongodb://rogthat:21savage@ds151293.mlab.com:51293/servicebots'; 
const db = require('monk')(url);

/*GET home page */

router.get('/', (req, res, next) => {
    var db = req.db;
    var posts = db.get('posts');
    posts.find({}, {}, (err, posts) => {
        res.render('index', {title: 'Service Bots', posts: posts,  message: req.flash('success')});
    });
    
});

function ensureAuthenticated( req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/users/login');
}

router.get('/privacy-policy', (req, res, next) => {
    var db = req.db;
    var posts = db.get('posts');
    posts.find({}, {}, (err, posts) => {
        res.render('privacy-policy', {title: 'Privacy-Policy', posts: posts,  message: req.flash('success')});
    });
    
});

router.get('/howtouse', (req, res, next) => {
    var db = req.db;
    var posts = db.get('posts');
    posts.find({}, {}, (err, posts) => {
        res.render('howtouse', {title: 'How to Use - Nodo', posts: posts,  message: req.flash('success')});
    });
    
});


module.exports = router;