'use strict';

var backbone = require('backbone');

exports.View = backbone.View.extend({
  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.toJSON()));
    } else {
      this.$el.html(this.template());
    }
  },

  template: function() {
    return 'Missing Template';
  }
});
