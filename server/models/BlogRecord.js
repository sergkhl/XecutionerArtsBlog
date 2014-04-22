var mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
    url: {type: String, required: '{PATH} is required!'},
    created: {type: Date, default: Date.now}
});

var blogRecordSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required!', unique:true},
    text: {type: String, required: '{PATH} is required!'},
    author: {type: String, required: '{PATH} is required!'},
    image: [imageSchema],
    featured: {type: Boolean},
    published: {type: Date, default: Date.now},
    tags: [String]
});
var BlogRecord = mongoose.model('BlogRecord', blogRecordSchema);

function createDefaultBlog() {
    BlogRecord.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            BlogRecord.create({author: 'Sergio Khl.', title: 'C# for Sociopaths', text: '<b>Hello</b> as you can see me', featured: true, published: new Date('10/5/2013'), tags: ['C#']});
            BlogRecord.create({author: 'Idiocracy L.', title: 'C# for Non-Sociopaths', text: '<img width="960" height="260.5" title="mairacharmed" alt="mairacharmed" src="http://mairacharmed.files.wordpress.com/2014/03/cropped-fantasy-23.jpg" scale="0"></img>', featured: true, published: new Date('10/12/2013'), tags: ['C#'], image: [{url: 'http://mairacharmed.files.wordpress.com/2014/03/cropped-fantasy-23.jpg'}]});
        }
    })
}

exports.createDefaultBlog = createDefaultBlog;