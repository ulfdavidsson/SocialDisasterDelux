// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/friendsearch/friendsearch.html',
  'views/friendsearch/searchField',
  'views/friendsearch/searchResultList',

], function($, _, Backbone, friendSerachTemplate,searchFieldView,searchResultListView){

  var friendSerachView = Backbone.View.extend({
    el: $("#page"),
	events: {
      
    },
    initialize: function(){
		
    },  
    render: function(){
		this.el.html(friendSerachTemplate);
		$("#searchField").html(searchFieldView.render());
		$("#serachResult").html(searchResultListView.render());
    }
  });
  return new friendSerachView;
});
