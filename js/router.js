// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/main',
], function($, _, Backbone, mainHomeView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes

      // Default
      '*actions': 'defaultAction'
    },
    defaultAction: function(actions){
      // We have no matching route, lets display the home page
      mainHomeView.render();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
