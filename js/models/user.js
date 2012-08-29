define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var userModel = Backbone.Model.extend({
    defaults: {
      name: "name",
	  imageUri:"",
      id: -1
    },
    initialize: function(){
    }

  });
  return userModel;

});
