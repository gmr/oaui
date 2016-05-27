'use strict';

var api = require('../views/api');
var swagger = require('../models/swagger');

exports.controller = function(url) {
  var model = new swagger.Model({url: url});
  this.layout = new api.View({el: this.el, model: model});
  model.fetch();
};
