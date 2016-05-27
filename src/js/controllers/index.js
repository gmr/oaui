'use strict';

var index = require('../views/index');

exports.controller = function() {
  this.layout = new index.View({el: this.el});
  this.layout.render()
};
