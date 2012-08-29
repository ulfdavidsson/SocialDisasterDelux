define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/friendsearch/searchResultList.html',
  'collections/users',
  'views/friendsearch/searchResultListItem',
], function($, _, Backbone, searchResultListTemplate,usersCollection,searchResultListItemView){

  var searchResultListView = Backbone.View.extend({
    tag: "div",
	events: {	
    },
    initialize: function(){
		this.collection = usersCollection;
	    this.collection.bind("add", this.render,this);
		this.collection.bind('all', this.render, this);
    },  
    render: function(){
		var compiledTemplate = _.template(searchResultListTemplate);
		$(this.el).html(compiledTemplate); 

		
	  	for(var i in this.collection.models)
		{
			userModel = this.collection.models[i];
			view = new searchResultListItemView({model:userModel});
			$("#searchResult").append(view.render());
		}	
		
		/*
	  for(var i in this.collection.models)
	  {
		//	var environmentIssueModel = this.collection.models[i];
		//	var view = new environmentIssueListItemView({model:environmentIssueModel});
		
      	$("#searchResult").append(this.collection.models[i].attributes.name);
		
		
		
	  }*/
		
      return this.el;
	  
    }
  });
  return new searchResultListView;
});
