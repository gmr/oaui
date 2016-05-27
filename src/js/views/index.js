'use strict';

var base = require('./base');
var template = require('./templates/index.hbs');

exports.View = base.View.extend({
  template: template
});
