define([
  'jquery',
  'underscore',
  'backbone',
  'models/user',
], function($, _, Backbone, userModel){
  var filteredUsersCollection = Backbone.Collection.extend({
    model: userModel,
    initialize: function(){

    },
	addNoneExisting: function(user){
	
		if(this.get(user.id) === undefined)
		{
			this.add(user);
		}
	},
	addList: function(users){
		for(var i in users)
		{
			user = users[i];
			if(this.get(user.id) === undefined)
			{
				this.add(user,{silent: true});
			}
		}		
		this.trigger("add");
	}

  });
  return new filteredUsersCollection;
});
