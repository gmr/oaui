'use strict';

var _ = require('underscore');
var base = require('./base');

var location_collection = require('../collections/location');

exports.Model = base.Model.extend({

  defaults: {
    name: 'OpenAPI Documentation Viewer',
    url: null
  },

  initialize: function(options) {
    var locations = new location_collection.Collection();
    this.set('locations', locations);
    this.listenTo(locations, 'change', function(event){
      this.trigger('change', event);
    });
  },

  url: function() {
    return this.get('url');
  }

});
