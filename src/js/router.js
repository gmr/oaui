'use strict';

var backbone = require('backbone');
var api = require('./controllers/api');
var index = require('./controllers/index');

exports.Router = backbone.Router.extend({

  initialize(options) {
    this.el = options.el;
    this.listenTo(backbone, 'router:go', this.go);
    this.route('*paths', 'index', index.controller);
    this.route('api', 'api', api.controller);
  },

  /**
   * Shortcut `navigate` function. Always triggers the controller.
   *
   * @method go
   * @param {String} route Route to navigate to
   */
  go(route) {
    if (route.startsWith('/')) {
      window.location.assign(route);
      return;
    }
    this.navigate(route, { trigger: true });
  }

});
