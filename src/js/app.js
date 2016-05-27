'use strict';

var backbone = require('backbone');
var router = require('./router');

exports.App = function(options) {
  this.el = options.el;
  this.start = function() {
    this._router = new router.Router({el: this.el});
    if (window.__backboneAgent) {
      window.__backboneAgent.handleBackbone(backbone);
    }
  };
};
