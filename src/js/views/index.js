'use strict';

var $ = require('jQuery');
var base = require('./base');
var bootstrap = require('bootstrap');
var template = require('./templates/index.hbs');
require('handlebars-helpers')();

exports.View = base.View.extend({
  template: template,

  initialize: function(options) {
    this.listenTo(this.model, 'change', this.onChange);
    this.render();
    this.$el.find('a.nav-link').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    })
  },

  onChange: function() {
    this.render();
  }
});
