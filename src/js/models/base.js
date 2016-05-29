'use strict';

var _ = require('underscore');
var backbone = require('backbone');

exports.Model = backbone.Model.extend({

  parse: function(response) {
    _.each(_.keys(response), function(key){
      if (_.has(this.attributes, key) &&
        _.has(this.attributes[key], 'models')) {
        var collection = this.get(key);
        collection.reset(response[key]);
        delete response[key];
      }
    }.bind(this));
    return response;
  },

  toJSON: function() {
    var attrs = _.clone(this.attributes);
    _.each(_.keys(attrs), function(key) {
      if (_.has(attrs[key], 'models')) {
        this.attributes[key].sort();
        attrs[key] = this.attributes[key].toJSON()
      }
    }.bind(this));
    return attrs;
  }

});
