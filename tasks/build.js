module.exports = function(grunt) {
  grunt.registerTask('build', 'Build swag', function(target) {
    var tasks = [
      'clean:build',
      'clean:dist',
      'copy:data',
      'copy:images',
      'copy:index',
      'copy:fonts',
      'sass',
      'browserify:vendor',
      'browserify:app',
      'concat:app'
    ];
    return grunt.task.run(tasks);
  });
};
