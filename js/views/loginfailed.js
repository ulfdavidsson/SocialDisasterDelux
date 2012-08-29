// Filename: views/user/profile
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/loginfailed.html'
], function($, _, Backbone, loginfailedTemplate){

  var loginFailedView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      this.el.html(loginfailedTemplate);
    }
  });
  return new loginFailedView;
});
