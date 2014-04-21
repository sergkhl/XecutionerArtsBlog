var mongoose = require('mongoose'),
  userModel = require('../models/User'),
  courseModel = require('../models/Course'),
  blogModel = require('../models/BlogRecord'),
  techModel = require('../models/Tech')
    ;

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('db opened');
  });

  userModel.createDefaultUsers();
  courseModel.createDefaultCourses();
  blogModel.createDefaultBlog();
  techModel.createDefaultTechs();
};