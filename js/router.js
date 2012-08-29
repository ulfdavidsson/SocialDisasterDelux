// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'facebookWrapper',
  'views/home/main',
  'views/user/profile',
  'views/user/list',
  'views/loginfailed',
], function($, _, Backbone,facebookWrapper,mainHomeView,userProfileView,userListView,loginFailedView){

	var AuthenticatedRouter = Backbone.Router.extend({
		requireLogin : function(ifYes) {
		
			if(facebookWrapper.currentUserLoggedIn()){
				if ($.isFunction(ifYes)) ifYes.call(this);
			}
			else{ 
				facebookWrapper.run(function(FB){
					FB.Event.subscribe('auth.authResponseChange', function(response) {
						if (response.status === 'connected') {
				
								uid = response.authResponse.userID;
								accessToken = response.authResponse.accessToken;
								
								facebookWrapper.currentUserId = uid;
								
								//set logedin user
								FB.api('/me', function(response) {
									if (response.name != undefined ) {
										if ($.isFunction(ifYes)) ifYes.call(this);
									}         
								});
								
						} else if (response.status === 'not_authorized') {
								// the user is logged in to Facebook, 
								// but not connected to the app
								this.navigate('loginfailed', true);
								facebookWrapper.currentUserReset();
						} else {
								this.navigate('loginfailed', true);
								facebookWrapper.currentUserReset();
						}
					});
				});
			}	
	  }
	});
  
	var AppRouter = AuthenticatedRouter.extend({
		routes : {
		    'loginfailed' : 'loginfailed',
			'userprofile' : 'userprofile',
			'userlist' : 'userlist',
			// Default
		    '*actions': 'defaultAction'
		},
		defaultAction: function(actions){
		  // We have no matching route, lets display the home page
		  mainHomeView.render();
		},
		userprofile : function() {
			this.requireLogin(function() {
				userProfileView.render(); 
			});
		},
		userlist : function() {
			this.requireLogin(function() {
				userListView.render(); 
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
