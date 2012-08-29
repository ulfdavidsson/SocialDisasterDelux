// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/friendserach/friendserach.html',

], function($, _, Backbone, friendSerachTemplate){

  var friendSerachView = Backbone.View.extend({
    el: $("#page"),
	events: {
      
    },
    initialize: function(){
    },  
    render: function(){
      this.el.html(friendSerachTemplate);
    }
  });
  return new friendSerachView;
});
