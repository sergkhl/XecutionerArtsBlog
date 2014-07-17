/*global module*/

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-html2js');
  //grunt.loadNpmTasks('grunt-contrib-nodeunit');


    // Default task.
    //grunt.registerTask('default', ['jshint']);//, 'nodeunit']);

    grunt.registerTask('default', [/*'jshint',*/'build']);//, 'karma:unit']);
    grunt.registerTask('build', ['clean','html2js','concat','copy:assets']); //,'recess:build'
    grunt.registerTask('release', ['clean','html2js','uglify','jshint','karma:unit','concat:index', 'recess:min','copy:assets']);
    grunt.registerTask('timestamp', function() {
        grunt.log.subhead(Date());
    });
    //grunt.registerTask('test-watch', ['karma:watch']);

    grunt.registerTask('supervise', function() {
        this.async();
        require('supervisor').run(['server.js']);
    });
  // Project configuration.
  grunt.initConfig({
    //nodeunit: ['test/**/*.js'],
      distdir: 'public/dist',
      pkg: grunt.file.readJSON('package.json'),
      banner:
          '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
              '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
              ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
              ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
      src: {
          js: ['public/app/**/*.js'],
          jsTpl: ['<%= distdir %>/templates/**/*.js'],
          //specs: ['test/**/*.spec.js'],
          //scenarios: ['test/**/*.scenario.js'],
          html: ['server/views/index.html'],
          tpl: {
              app: ['src/app/**/*.tpl.html'],
              common: ['src/common/**/*.tpl.html']
          }
          ,less: ['src/less/stylesheet.less'], // recess:build doesn't accept ** in its file patterns
          lessWatch: ['src/less/**/*.less']
      },
      clean: ['<%= distdir %>/*'],
      copy: {
          assets: {
              files: [{ dest: '<%= distdir %>', src : '**', expand: true, cwd: 'public/assets/' }]
          }
      },
      html2js: {
          app: {
              options: {
                  base: 'public/app'
              },
              src: ['<%= src.tpl.app %>'],
              dest: '<%= distdir %>/templates/app.js',
              module: 'templates.app'
          },
          common: {
              options: {
                  base: 'public/common'
              },
              src: ['<%= src.tpl.common %>'],
              dest: '<%= distdir %>/templates/common.js',
              module: 'templates.common'
          }
      },
      concat:{
          dist:{
              options: {
                  banner: "<%= banner %>"
              },
              src:['<%= src.js %>', '<%= src.jsTpl %>'],
              dest:'<%= distdir %>/app.js' //<%= pkg.name %>.js
          },
          index: {
              src: ['server/views/index.html'],
              dest: '<%= distdir %>/index.html',
              options: {
                  process: true
              }
          },
          angular: {
              src:['public/vendor/angular/angular.js', 'public/vendor/angular-resource/angular-resource.js', 'public/vendor/angular-route/angular-route.js', 'public/vendor/angular-sanitize/angular-sanitize.js','public/vendor/angular-animate/angular-animate.js'],
              dest: '<%= distdir %>/angular.js'
          }
      },
      uglify: {
          dist:{
              options: {
                  banner: "<%= banner %>"
              },
              src:['<%= src.js %>' ,'<%= src.jsTpl %>'],
              dest:'<%= distdir %>/<%= pkg.name %>.js'
          },
          angular: {
              src:['<%= concat.angular.src %>'],
              dest: '<%= distdir %>/angular.js'
          }
      },
      recess: {
          build: {
              files: {
                  '<%= distdir %>/<%= pkg.name %>.css':
                      ['<%= src.less %>'] },
              options: {
                  compile: true
              }
          },
          min: {
              files: {
                  '<%= distdir %>/<%= pkg.name %>.css': ['<%= src.less %>']
              },
              options: {
                  compress: true
              }
          }
      },
      watch:{
          all: {
              files:['<%= src.js %>', '<%= src.tpl.app %>', '<%= src.tpl.common %>', '<%= src.html %>'], //'<%= src.specs %>', '<%= src.lessWatch %>',
              tasks:['default','timestamp']
          },
          build: {
              files:['<%= src.js %>', '<%= src.tpl.app %>', '<%= src.tpl.common %>', '<%= src.html %>'], //'<%= src.specs %>', '<%= src.lessWatch %>',
              tasks:['build','timestamp']
          }
      },
    jshint: {
      files: ['gruntFile.js', 'server.js', 'server/**/*.js', '<%= src.js %>', '<%= src.jsTpl %>'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        globals:{}
        //globals: { require: false, __dirname: false, console: false, module: false, exports: false }
      }
    }
  });
};
