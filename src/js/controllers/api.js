'use strict';

var api_model = require('../models/api');
var api_view = require('../views/api');

exports.api = function(el, url) {
  var model = new api_model.Model({url: url});
  var layout = new api_view.View({el: el, model: model});
  model.fetch();
  return layout;
};
