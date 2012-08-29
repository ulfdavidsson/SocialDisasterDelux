// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'facebookWrapper',
  'views/home/main',
  'views/friendSearch/friendSearch',
  'views/loginfailed',
], function($, _, Backbone,facebookWrapper,mainHomeView,friendSerachView,loginFailedView){
	var AuthenticatedRouter = Backbone.Router.extend({
		requireLogin : function(ifYes) {
				rout = this;
				facebookWrapper.run(function(FB){
					FB.getLoginStatus(function(response) {
						if (response.status === 'connected') {
							if ($.isFunction(ifYes)) ifYes.call(this);	
						} else if (response.status === 'not_authorized') {
							rout.navigate('loginfailed', true);
						} else {
							rout.navigate('loginfailed', true);
						}
					});
				}); 
				
	  }
	});
	  
	var AppRouter = AuthenticatedRouter.extend({
		routes : {
		    'loginfailed' : 'loginfailed',
			'friendsearch' : 'friendsearch',
			// Default
		    '*actions': 'defaultAction'
		},
		defaultAction: function(actions){
		  // We have no matching route, lets display the home page
		  mainHomeView.render();
		},
		friendsearch : function() {
			this.requireLogin(function() {
				friendSerachView.render(); 
			});
		},
		loginfailed : function() {
			loginFailedView.render(); 
		}
	});

  var initialize = function(){
  
    var app_router = new AppRouter;
	
	facebookWrapper.run(function(FB){
		FB.Event.subscribe('auth.login',
			function(response) {
				app_router.navigate('friendsearch', true);
		});

	}); 
	
	facebookWrapper.run(function(FB){
		FB.Event.subscribe('auth.logout',
			function(response) {
				app_router.navigate('', true);
		});

	}); 
	
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
