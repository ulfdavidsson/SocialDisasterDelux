// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/friendsearch/friendsearch.html',
  'views/friendsearch/searchField',
  'views/friendsearch/searchResultList',
  'collections/users',
  'collections/filteredusers',
  'facebookWrapper',
], function($, _, Backbone, friendSerachTemplate,searchFieldView,searchResultListView,usersCollection,filteredUsersCollection,facebookWrapper){

  var friendSerachView = Backbone.View.extend({
    el: $("#page"),
	events: {
      
    },
    initialize: function(){

    },  
    render: function(){
		facebookWrapper.run(function(FB){
			FB.api('/me/friends', {fields: 'name,id'}, function(response) {
				usersCollection.addList(response.data);
				filteredUsersCollection.addList(response.data);					
			});
		}); 
	
		this.el.html(friendSerachTemplate);
		$("#searchField").html(searchFieldView.render());
		
		$("#searchResult").html(searchResultListView.render());
    }
  });
  return new friendSerachView;
});
