// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'twitterbootstrap',
  'views/menu/menu',
], function($, _, Backbone, Router,TwitterBootstrap,menuView){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
	
	menuView.render();
	
    Router.initialize();
  }

  return {
    initialize: initialize
  };
});
