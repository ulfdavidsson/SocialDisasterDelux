define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

	(function() {
        var e = document.createElement('script'); e.async = true;
        e.src = document.location.protocol +
          '//connect.facebook.net/en_US/all.js';
        document.getElementById('fb-root').appendChild(e);
      }());

	//Wrapper object that allows to run facebook request from outside 
	wrapper = {
		currentUserId : -1,
		init : function (){
		FB.init({
			  appId: '425059737529132',
			  cookie: true,
			  xfbml: true,
			  oauth: true
			});
		},
		run : function(callback) { 
			if(window.fbAsyncInit !== undefined)
			{
				callback(FB);
			}
			
		},
		currentUserLoggedIn : function(){
			
			if(this.currentUserId != -1){ 
				return true;
			}
			else{
				return false;
			}
		},
		currentUserReset: function()
		{
			this.currentUserId = -1;
		}
	};

	window.fbAsyncInit = function() {
		wrapper.init();
		
		// Additional initialization code here
	};

  
  return wrapper;
});

