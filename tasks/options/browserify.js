'use strict';

module.exports = {
  app: {
    files: {
      'build/app.js': ['src/js/main.js']
    },
    options: {
      transform: [['hbsfy', {global: true}],
                  ['babelify', {presets: ["es2015"]}]],
      external: ['backbone', 'backbone-models']
    }
  },
  vendor: {
    src: [],
    dest: 'build/vendor.js',
    options: {
      alias: [
        './node_modules/backbone/backbone.js:backbone',
        './node_modules/backbone-nested-models/backbone-nested-models.js:backbone-models'
      ]
    }
  }
};
