'use strict';

var $ = require('jquery');
var backbone = require('backbone');

exports.View = backbone.View.extend({
  
  initialize: function(options) {
    this.el = options.el;
    this.brand_el = options.el.querySelector('nav > a');
    this.listenTo(this.model, 'change', this.onChange);
    this.render();
  },
  
  render: function() {
    this.brand_el.innerHTML = this.model.get('name');
  },

  onChange: function() {
    this.render();
  }
});
