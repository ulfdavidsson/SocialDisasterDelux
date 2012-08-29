define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/friendsearch/searchResultList.html',

], function($, _, Backbone, searchResultListTemplate){

  var searchResultListView = Backbone.View.extend({
    tag: "div",
	events: {	
    },
    initialize: function(){
    },  
    render: function(){
		var compiledTemplate = _.template(searchResultListTemplate);
		$(this.el).html(compiledTemplate); 

      return this.el;
	  
    },
	serach : function(){

	}
  });
  return new searchResultListView;
});
