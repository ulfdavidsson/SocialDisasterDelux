// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'models/user',
  'text!templates/friendsearch/searchResultListItem.html',

], function($, _, Backbone,userModel, searchResultListItemTemplate){

  var searchResultListItemView = Backbone.View.extend({
    tag: "li",
	events: {
      
    },
    initialize: function(){
    },  
    render: function(){
	
	 var data = {
        userModel : this.model,
        _: _
      };
	
	  var compiledTemplate = _.template(searchResultListItemTemplate,data);
	  $(this.el).html(compiledTemplate); 

      return this.el;
    }
  });
  return searchResultListItemView;
});
