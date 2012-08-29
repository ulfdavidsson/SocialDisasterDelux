define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var userModel = Backbone.Model.extend({
    defaults: {
      firstName: "first",
	  lastName: "last",
      id: -1
    },
    initialize: function(){
    }

  });
  return userModel;

});
