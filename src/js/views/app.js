'use strict';

var base = require('./base');
var template = require('./templates/app.hbs');

exports.View = base.View.extend({
  template: template
});
