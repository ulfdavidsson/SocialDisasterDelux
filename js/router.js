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
				facebookWrapper.run(function(FB){
					FB.getLoginStatus(function(response) {
						if (response.status === 'connected') {
							if ($.isFunction(ifYes)) ifYes.call(this);	
						} else if (response.status === 'not_authorized') {
							//this.navigate('loginfailed', true);
						} else {
							//this.navigate('loginfailed', true);
						}
					});
				}); 
				
	  }
	});
  
	var AppRouter = AuthenticatedRouter.extend({
		routes : {
		    'loginfailed' : 'loginfailed',
			'friendserach' : 'friendserach',
			// Default
		    '*actions': 'defaultAction'
		},
		defaultAction: function(actions){
		  // We have no matching route, lets display the home page
		  mainHomeView.render();
		},
		friendserach : function() {
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
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
