define([
  'jquery',
  'underscore',
  'backbone',
  'models/user',
], function($, _, Backbone, userModel, usersCollection){
  var usersCollection = Backbone.Collection.extend({
    model: userModel,
    initialize: function(){

    }//,
	//addOne: function(user){
		
	//}

  });

  return new usersCollection;
});
