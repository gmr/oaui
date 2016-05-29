'use strict';

module.exports = {
  app: {
    files: {
      'build/app.js': ['src/js/main.js']
    },
    options: {
      transform: [['hbsfy', {globals: true}],
                  ['babelify', {presets: ["es2015"]}]],
      external: ['backbone']
    }
  },
  vendor: {
    src: [],
    dest: 'build/vendor.js',
    options: {
      alias: [
        './node_modules/backbone/backbone.js:backbone'
      ]
    }
  }
};
