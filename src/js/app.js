'use strict';

var backbone = require('backbone');
var config = require('./models/config');
var app_router = require('./router');
var header_view = require('./views/header');

exports.App = function(options) {
  this.initialized = false;
  this.el = options.el;
  this.config = new config.Model({url: options.config});
  this.router = new app_router.Router({config: this.config, el: this.el});
  this.config.on('change', function(model) {
    if (!this.initialized) {
      this.initialized = true;
      this.header = new header_view.View({el: document.querySelector('header'),
                                          model: this.config,
                                          router: this.router});
      backbone.history.start();
    }
  }.bind(this));
  this.config.fetch();
};
