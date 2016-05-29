'use strict';

var backbone = require('backbone');

var api_controller = require('./controllers/api');
var index_controller = require('./controllers/index');
var app_view = require('./views/app');

exports.Router = backbone.Router.extend({

  routes: {
    "api": "apiRoute",
    "*path": "defaultRoute"
  },

  layout: null,

  initialize: function(options) {
    this.app = new app_view.View({el: options.el});
    this.config = options.config;
  },

  reset: function() {
    if (this.layout != undefined) {
      this.layout.remove();
    }
    this.app.render();
  },

  apiRoute: function(url) {
    this.reset();
    this.layout = api_controller.api(this.layoutElement(), url);
  },

  defaultRoute: function() {
    this.reset();
    this.layout = index_controller.index(this.layoutElement(), this.config);
  },

  layoutElement: function() {
    return this.app.$el.find('> div');
  }
});
