'use strict';

var backbone = require('backbone');
var location = require('../models/location');

exports.Collection = backbone.Collection.extend({
  comparator: 'name',
  model: location.Model
});
