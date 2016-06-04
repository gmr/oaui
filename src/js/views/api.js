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

  template: template,

  attributes: {http_methods: ['get', 'post', 'put', 'delete', 'options', 'head']},

  initialize: function(options) {
    this.listenTo(this.model, 'change', this.onChange);
    $(this.el).tab('show');
  },

  onChange: function() {
    window.document.title = 'API Documentation: ' + this.model.get('title');
    this.render();
  }

});
