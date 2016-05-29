'use strict';

var nested = require('backbone-nested');

exports.Model = nested.Model.extend({

  defaults: {
    openapi: '2.0',
    info: null,
    host: null,
    basePath: '/',
    schemes: [],
    consumes: [],
    produces: [],
    paths: null,
    definitions: null,
    parameters: null,
    responses: null,
    securityDefinitions: null,
    security: null,
    tags: null,
    title: null,
    externalDocs: null,
    url: null
  },

  parse: function(response) {
    if (response.info !== undefined && response.info.title !== undefined) {
      response.title = response.info.title;
    }
    return response;
  },

  url: function() {
    return this.get('url');
  }

});
