'use strict';

var $ = require('jQuery');
var base = require('./base');
var bootstrap = require('bootstrap');

var handlebars = require('handlebars/runtime')['default'];
var helpers = require('handlebars-helpers')({
  handlebars: handlebars
});

var template = require('./templates/api.hbs');

exports.View = base.View.extend({

  events: {
    "click .endpoint": "toggleEndpoint"
  },

  template: template,

  attributes: {http_methods: ['get', 'post', 'put', 'delete', 'options', 'head']},

  initialize: function(options) {
    this.listenTo(this.model, 'change', this.onChange);
  },

  onChange: function() {
    window.document.title = 'API Documentation: ' + this.model.get('title');
    this.render();
    $(this.el).find('.panel-body').hide();
  },

  toggleEndpoint: function(e) {
    var target = e.currentTarget.getAttribute('data-target');
    $(target).toggle();
    $(e.currentTarget).find('.methods').toggle();
    $(e.currentTarget).find('.endpoint-close').toggle();
  }

});
