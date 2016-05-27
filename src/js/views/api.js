'use strict';

var base = require('./base');
var template = require('./templates/api.hbs');

exports.View = base.View.extend({
  template: template,

  initialize: function(options) {
    this.listenTo(this.model, 'change', this.onChange);
  },

  onChange: function() {
    var info = this.model.get('info');
    window.document.title = 'API Documentation: ' + info.get('title');
    this.render();
  }

});
