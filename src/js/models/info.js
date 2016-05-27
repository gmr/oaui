'use strict';

var backbone = require('backbone-models');
var contact = require('./contact');
var license = require('./license');

exports.Model = backbone.Model.extend({
  defaults: {
    title: null,
    description: null,
    termsOfService: null,
    version: null
  },
  relations: {
    contact: contact.Model,
    license: license.Model
  }
});
