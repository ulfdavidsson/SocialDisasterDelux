// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/friendsearch/searchField.html',
  'collections/users',
  'collections/filteredusers',
], function($, _, Backbone, friendSerachFieldTemplate, usersCollection,filteredUsersCollection){

  var friendSerachView = Backbone.View.extend({
    tag: "div",
	events: {
		"keyup #searchFieldInput" : "search"  
		
    },
    initialize: function(){
    },  
    render: function(){

		var compiledTemplate = _.template(friendSerachFieldTemplate);
		$(this.el).html(compiledTemplate); 

      return this.el;
	  
    },
	search : function(){
		
		stringToFind = $("#searchFieldInput").val().toLowerCase();
		
		filteredUsersCollection.reset();	
		
		for(var i in usersCollection.models)
		{
			userModel = usersCollection.models[i];
			name = userModel.attributes.name.toLowerCase();
			if(name.indexOf(stringToFind) !== -1)
			{
				filteredUsersCollection.add(userModel,{silent: true});
			}
		}	
		filteredUsersCollection.trigger("add");

	} 
  });
  return new friendSerachView;
});
