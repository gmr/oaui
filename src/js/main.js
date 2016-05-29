'use strict';

var $ = require('jquery');
window.jQuery = $;
window.Tether = require('tether');
var bootstrap = require('bootstrap');
var app = require('./app');
var backbone = require('backbone');

$(() => {
  // Chrome Backbone Debugger Plugin
  if (window.__backboneAgent) {
    window.__backboneAgent.handleBackbone(backbone);
  }
  window.app = new app.App({
    config: '/data/config.json',
    el: document.querySelector('div#app') || document.body
  });
});
