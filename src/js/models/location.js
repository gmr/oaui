'use strict';

var _ = require('underscore');
var base = require('./base');

var api_collection = require('../collections/api');

exports.Model = base.Model.extend({

  defaults: {
    name: null
  },
  
  initialize: function(options) {
    var apis = new api_collection.Collection();
    this.set('apis', apis);

    this.listenTo(apis, 'change', function(event){
      this.trigger('change', event);
    });

    apis.reset(options.apis);
    _.each(apis.models, function(model){
      model.fetch();
    });

    delete options.apis;
    return options;
  }

});
