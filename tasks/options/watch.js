'use strict';

var LIVERELOAD_PORT = process.env.LIVERELOAD_PORT || 35730;

module.exports = {
  app: {
    options: {livereload: LIVERELOAD_PORT},
    files: ['build/app.js'],
    tasks: ['concat:app']
  },
  index: {
    options: {livereload: LIVERELOAD_PORT},
    files: ['src/index.html'],
    tasks: ['copy:index']
  },
  source: {
    files: ['src/js/*.js', 'src/js/**/*'],
    tasks: ['browserify:app']
  },
  styles: {
    options: {livereload: LIVERELOAD_PORT},
    files: ['src/styles/**/*.scss'],
    tasks: ['sass']
  }
};
