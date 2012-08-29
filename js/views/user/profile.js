// Filename: views/user/profile
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/user/profile.html'
], function($, _, Backbone, userProfileTemplate){

  var userProfileView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      this.el.html(userProfileTemplate);
    }
  });
  return new userProfileView;
});
