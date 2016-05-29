'use strict';

var backbone = require('backbone');

var api = require('../models/api');

exports.Collection = backbone.Collection.extend({
  comparator: 'title',
  model: api.Model
});
