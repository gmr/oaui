'use strict';

var liveReload = require('connect-livereload');
var LIVERELOAD_PORT = process.env.LIVERELOAD_PORT || 35730;
var serveStatic = require('serve-static');

module.exports = {
  livereload: {
    options: {
      base: 'dist/<%= pkg.version %>/',
      middleware: function (connect, options) {
        var middlewares = [liveReload({port: LIVERELOAD_PORT})];
        options.base.forEach(function (base) {
          middlewares.push(serveStatic(base));
        });
        return middlewares;
      },
      livereload: LIVERELOAD_PORT,
      debug: true,
      keepalive: true
    }
  }
};
