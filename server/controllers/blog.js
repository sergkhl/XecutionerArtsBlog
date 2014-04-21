var Blog = require('mongoose').model('BlogRecord');

exports.getBlogRecords = function(req, res) {
    Blog.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.getBlogRecordById = function(req, res) {
    Blog.findOne({_id:req.params.id}).exec(function(err, blogrecord) {
        res.send(blogrecord);
    })
};

exports.deleteBlogRecord = function(req, res) {
    if(!req.user.hasRole('admin')) {
        res.status(403);
        return res.end();
    }

    Blog.findOne({_id:req.params.id}).remove().exec(function(err, blogrecord) {
        res.send(blogrecord);
    })
};

exports.createBlogRecord = function(req, res, next) {
    var blogRecordData = req.body;
    blogRecordData.title = blogRecordData.title.toLowerCase();
    Blog.create(blogRecordData, function(err, blogrecord) {
        if(err) {
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate title');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }
        res.send(blogrecord);

    })
};

exports.updateBlogRecord = function(req, res) {
    if(!req.user.hasRole('admin')) {
        res.status(403);
        return res.end();
    }

    var blogUpdates = req.body;
    //console.log('id ', blogUpdates);
    Blog.findOne({_id: blogUpdates._id})
        .exec(function(err, blogrecord) {
        blogrecord.title = blogUpdates.title;
        blogrecord.text = blogUpdates.text;
        blogrecord.author = blogUpdates.author;
        blogrecord.save(function(err, blogrecord) {
                if(err) { res.status(400); return res.send({reason:err.toString()});}
                res.send(blogrecord);
            })
    })
};