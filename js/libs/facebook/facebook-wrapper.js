define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

	//Wrapper object that allows us to run facebook request
	wrapper = {
		init : function (){
		 FB.init({
			  appId: '425059737529132',
			  cookie: true,
			  xfbml: true,
			  oauth: true
			});
		},
		run : function(callback) { 
			callback(FB);
		}
	};

	window.fbAsyncInit = function() {
		wrapper.init();
		
		// Additional initialization code here
	};

    (function() {
        var e = document.createElement('script'); e.async = true;
        e.src = document.location.protocol +
          '//connect.facebook.net/en_US/all.js';
        document.getElementById('fb-root').appendChild(e);
      }());

  return wrapper;
});

