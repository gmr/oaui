'use strict';

var backbone = require('backbone');

exports.Model = backbone.Model.extend({
  defaults: {
    name: null,
    url: null
  }
});
