var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/xecutionerartsblog',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    //db: 'mongodb://jeames:multivision@ds053178.mongolab.com:53178/multivision',
    db: 'mongodb://user:password@ds053798.mongolab.com:53798/xecutionerartsblog',
      port: process.env.PORT || 80
  }
}