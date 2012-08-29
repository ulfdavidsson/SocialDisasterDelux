// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/user/list.html'
], function($, _, Backbone, userListTemplate){

  var userListView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      this.el.html(userListTemplate);
    }
  });
  return new userListView;
});
