var mongoose = require('mongoose');

var imageSchema
var blogRecordSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required!'},
    text: {type: String, required: '{PATH} is required!'},
    author: {type: String, required: '{PATH} is required!'},
    image: {type: String},
    featured: {type: Boolean, required: '{PATH} is required!'},
    published: {type: Date, required: '{PATH} is required!'},
    tags: [String]
});
var BlogRecord = mongoose.model('BlogRecord', blogRecordSchema);

function createDefaultBlog() {
    BlogRecord.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            BlogRecord.create({title: 'C# for Sociopaths', text: '<b>Hello</b> as you can see me', featured: true, published: new Date('10/5/2013'), tags: ['C#']});
            BlogRecord.create({title: 'C# for Non-Sociopaths', text: '<img width="960" height="260.5" title="mairacharmed" alt="mairacharmed" src="http://mairacharmed.files.wordpress.com/2014/03/cropped-fantasy-23.jpg" scale="0"></img>', featured: true, published: new Date('10/12/2013'), tags: ['C#']});
        }
    })
}

exports.createDefaultBlog = createDefaultBlog;