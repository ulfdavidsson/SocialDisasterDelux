// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/user/list.html',
  'collections/users',
  'facebookWrapper',
], function($, _, Backbone, userListTemplate, usersCollection,facebookWrapper){

  var userListView = Backbone.View.extend({
    el: $("#page"),
	events: {
      
    },
    initialize: function(){
      this.collection = usersCollection;
    },  
    render: function(){
      this.el.html(userListTemplate);
    }
  });
  return new userListView;
});
