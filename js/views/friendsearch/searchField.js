// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/friendsearch/searchField.html',
  'collections/users',
], function($, _, Backbone, friendSerachFieldTemplate, usersCollection){

  var friendSerachView = Backbone.View.extend({
    tag: "div",
	events: {
		"keypress #searchFieldInput" : "search"  
		
    },
    initialize: function(){
		this.collection = usersCollection;
    },  
    render: function(){

		var compiledTemplate = _.template(friendSerachFieldTemplate);
		$(this.el).html(compiledTemplate); 

      return this.el;
	  
    },
	search : function(){
		
		

		var usersWithE = _.filter(usersCollection, function(user){
							if(user.indexOf("e") != -1)
							{
								return user;
							} 
						});
		

	} 
  });
  return new friendSerachView;
});
