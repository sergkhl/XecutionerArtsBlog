var mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
    url: {type: String, required: '{PATH} is required!'},
    created: {type: Date, default: Date.now}
});

var TechnologySchema = mongoose.Schema({
    name: {type: String, required: '{PATH} is required!', unique:true},
    description: {type: String},
    image: [imageSchema],
    url: {type: String, required: '{PATH} is required!'},
    featured: {type: Boolean},
    tags: [String],
    released: {type: Date, default: Date.now}
});
var Technology = mongoose.model('Technology', TechnologySchema);

function createDefaultTechs() {
    Technology.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Technology.create({name: 'ASP.NET', url: 'http://www.asp.net/', featured: true, released: new Date('1/1/2002'), tags: ['Microsoft', 'Web Development', '.NET', 'Backend'], image: [{url: 'http://www.arvixe.com/images/landing_pages/asp_net_45_hosting.png'}]});
            Technology.create({name: 'AngularJS', url: 'https://angularjs.org/', featured: true, released: new Date('6/15/2009'), tags: ['Google', 'Web Development', 'JavaScript', 'Frontend'], image: [{url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png'}]});
            Technology.create({name: 'HTML5', url: 'http://wikipedia.org/wiki/HTML5', featured: true, released: new Date('5/1/2011'), tags: ['World Wide Web Consortium', 'Web Development', 'HTML', 'Frontend'], image: [{url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'}]});
            Technology.create({name: 'CSS', url: 'http://wikipedia.org/wiki/Cascading_Style_Sheets', featured: true, released: new Date('6/1/2011'), tags: ['World Wide Web Consortium', 'Web Development', 'CSS', 'Frontend'], image: [{url: 'http://alcrua.com/wp-content/uploads/2014/03/css3-150x150.png'}]});
            Technology.create({name: 'JQuery', url: 'http://jquery.com/', featured: true, released: new Date('6/30/2006'), tags: ['John Resig', 'Web Development', 'JavaScript', 'Frontend'], image: [{url: 'http://alcrua.com/wp-content/uploads/2014/03/j-query-logo-150x150.png'}]});
            Technology.create({name: 'AJAX', url: 'http://wikipedia.org/wiki/AJAX', featured: true, released: new Date('4/5/2006'), tags: ['W3C', 'Web Development', 'JavaScript', 'XML', 'Frontend'], image: [{url: 'http://alcrua.com/wp-content/uploads/2014/03/ajax-150x150.png'}]});
            Technology.create({name: 'PHP', url: 'http://php.net/', featured: true, released: new Date('6/15/1995'), tags: ['Rasmus Lerdorf', 'Web Development', 'PHP', 'Backend'], image: [{url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/300px-PHP-logo.svg.png'}]});
            Technology.create({name: 'NodeJS', url: 'http://nodejs.org/', featured: true, released: new Date('1/1/2009'), tags: ['Ryan Lienhart Dahl', 'Web Development', 'JavaScript', 'Backend'], image: [{url: 'http://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/233px-Node.js_logo.svg.png'}]});

        }
    })
}

exports.createDefaultTechs = createDefaultTechs;