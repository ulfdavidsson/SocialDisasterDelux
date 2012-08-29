// Filename: views/menu/menu
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/menu/menu.html'
], function($, _, Backbone, menuTemplate){

  var menuView = Backbone.View.extend({
    el: $("#menu"),
    render: function(){
      this.el.html(menuTemplate);
    }
  });
  return new menuView;
});
