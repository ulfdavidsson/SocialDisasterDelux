// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/friendsearch/friendsearch.html',
  'views/friendsearch/searchField',
  'views/friendsearch/searchResultList',
  'collections/users',
  'facebookWrapper',
], function($, _, Backbone, friendSerachTemplate,searchFieldView,searchResultListView,usersCollection,facebookWrapper){

  var friendSerachView = Backbone.View.extend({
    el: $("#page"),
	events: {
      
    },
    initialize: function(){

    },  
    render: function(){
		facebookWrapper.run(function(FB){
			FB.api('/me/friends', {fields: 'name,id'}, function(response) {
				this.collection = usersCollection.addList(response.data);
			});
		}); 
	
		this.el.html(friendSerachTemplate);
		$("#searchField").html(searchFieldView.render());
		
		$("#searchResult").html(searchResultListView.render());
    }
  });
  return new friendSerachView;
});
