'use strict';

var backbone = require('backbone-models');
var info = require('./info');

exports.Model = backbone.Model.extend({

  initialize: function(options) {
    this.swagger_url = options.url;
  },

  url: function() {
    return this.swagger_url;
  },

  defaults: {
    swagger: '2.0',
    host: null,
    basePath: '/',
    schemes: [],
    consumes: [],
    produces: [],
    paths: null,
    definitions: null,
    parameters: null,
    responses: null,
    securityDefintions: null,
    security: null,
    tags: null,
    externalDocs: null
  },
  relations: {
    info: info.Model
  }
});
