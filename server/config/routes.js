var auth = require('./auth'),
  users = require('../controllers/users'),
  courses = require('../controllers/courses'),
  blog = require('../controllers/blog'),
  techs = require('../controllers/techs'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/courses', courses.getCourses);
  app.get('/api/courses/:id', courses.getCourseById);

  //app.get('/api/about', blog.getBlogRecords);

  app.get('/api/techs', techs.getTechs);

  app.get('/api/blog', blog.getBlogRecords);
  app.get('/api/blog/:id', blog.getBlogRecordById);
  app.get('/api/blog/:id/edit', blog.getBlogRecordById);
  app.post('/api/blog', blog.createBlogRecord);
  app.put('/api/blog', blog.updateBlogRecord);
  app.delete('/api/blog/:id', blog.deleteBlogRecord);

  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
}