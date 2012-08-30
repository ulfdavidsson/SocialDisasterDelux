// Filename: views/menu/menu
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/menu/menu.html',
  'facebookWrapper',
], function($, _, Backbone, menuTemplate,facebookWrapper){

  var menuView = Backbone.View.extend({
    el: $("#navmenu"),
	events: {	
		'click #loginAction' : 'login',
		'click #logoutAction' : 'logout',
    },
	initialize: function(){

    },  
	login: function(){
		facebookWrapper.run(function(FB){
			FB.login();
		});
		 
	},
	logout: function(){
			facebookWrapper.run(function(FB){
			FB.logout();
		});
	},
    render: function(){
		this.el.html(menuTemplate);
		$("#loginAction").hide();
		$("#logoutAction").hide();
		
		facebookWrapper.run(function(FB){
		
		FB.getLoginStatus(function(response) {
		  if (response.status === 'connected') {
				$("#loginAction").hide();
				$("#logoutAction").show();
		  } else if (response.status === 'not_authorized') {
				$("#loginAction").show();
				$("#logoutAction").hide();
		  } else {
				$("#loginAction").show();
				$("#logoutAction").hide();
		  }
		 });
		
			FB.Event.subscribe('auth.authResponseChange', function(response) {
				if(response.status == 'connected')
				{ 
					$("#loginAction").hide();
					$("#logoutAction").show();
				}
				else
				{
					$("#loginAction").show();
					$("#logoutAction").hide();
				}
			});
		}); 
    }
  });
  return new menuView;
});
