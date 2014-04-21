var mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
    url: {type: String, required: '{PATH} is required!'},
    created: {type: Date, default: Date.now}
});

var TechSchema = mongoose.Schema({
    name: {type: String, required: '{PATH} is required!', unique:true},
    description: {type: String},
    image: [imageSchema],
    url: {type: String, required: '{PATH} is required!'},
    featured: {type: Boolean},
    tags: [String]
});
var Tech = mongoose.model('Tech', TechSchema);

function createDefaultTechs() {
    Tech.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Tech.create({name: 'ASP.NET', url: 'http://www.asp.net/', featured: true, tags: ['Microsoft', 'Web Development', '.NET', 'Backend']});
            Tech.create({name: 'AngularJS', url: 'https://angularjs.org/', featured: true, tags: ['Google', 'Web Development', 'JavaScript', 'Frontend']});
        }
    })
}

exports.createDefaultTechs = createDefaultTechs;