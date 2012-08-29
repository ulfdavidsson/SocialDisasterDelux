// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/user/listItem.html',
  'models/user',
], function($, _, Backbone, userListItemTemplate, userModel){

  var userListItemView = Backbone.View.extend({
    tag: "li",
	events: {
      
    },
    initialize: function(){
    },  
    render: function(){
      this.el.html(userListItemTemplate);
    }
  });
  return new userListItemView;
});
