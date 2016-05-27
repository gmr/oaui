'use strict';

var $ = require('jquery');
var app = require('./app');
var backbone = require('backbone');

$(() => {
  var main = new app.App({
    el: document.querySelector('div#app') || document.body
  });
  main.start();
  backbone.history.start({hashChange: true});
  window.app = main;
});
