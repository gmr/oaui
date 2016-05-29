'use strict';

var view = require('../views/index');

exports.index = function(el, config) {
  var layout = new view.View({el: el, model: config});
  layout.render();
  return layout;
};
