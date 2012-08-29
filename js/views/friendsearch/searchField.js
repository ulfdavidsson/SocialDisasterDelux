// Filename: views/user/list
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/friendsearch/searchField.html',

], function($, _, Backbone, friendSerachFieldTemplate){

  var friendSerachView = Backbone.View.extend({
    tag: "div",
	events: {
		"keypress #searchFieldInput" : "serach"  
		
    },
    initialize: function(){
    },  
    render: function(){
		var compiledTemplate = _.template(friendSerachFieldTemplate);
		$(this.el).html(compiledTemplate); 

      return this.el;
	  
    },
	serach : function(){

	}
  });
  return new friendSerachView;
});
