'use strict';

var _ = require('underscore');
var backbone = require('backbone');

exports.View = backbone.View.extend({

  render: function() {
    var data = {};

    if (this.model) {
      _.extend(data, this.model.toJSON());
    }
    if (this.attributes) {
      _.extend(data, {attributes: this.attributes});
    }
    this.$el.html(this.template(data));
  },

  template: function() {
    return 'Missing Template';
  }
});
