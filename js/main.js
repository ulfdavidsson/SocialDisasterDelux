require.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'twitterbootstrap': {
      deps: ['jquery'],
      exports: 'twitterbootstrap'
    },
    'twitterbootstrapmodal': {
      deps: ['twitterbootstrap'],
      exports: 'twitterbootstrapmodal'
    }
  },
  paths: {
    jquery: 'libs/jquery/jquery-min',
    twitterbootstrap: 'libs/twitter/bootstrap.min',
    twitterbootstrapmodal: 'libs/twitter/bootstrap-modal',
	facebookWrapper: 'libs/facebook/facebook-wrapper',
    amplify: 'libs/amplify/amplify.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-optamd3-min',
    text: 'libs/require/text',
    templates: '../templates',
    googlemaps : 'libs/google/google_maps_api_v3'
  }

});

require([
  'app',
  'facebookWrapper'
], function(App,facebookWrapper){
	facebookWrapper.run(function(FB){
		
		FB.Event.subscribe('auth.authResponseChange', function(response) {
		  $('#logger').append("<p>polling</p>");
			if (response.status === 'connected') {
					// the user is logged in and connected to your
					// app, and response.authResponse supplies
					// the user's ID, a valid access token, a signed
					// request, and the time the access token 
					// and signed request each expire
					var uid = response.authResponse.userID;
					var accessToken = response.authResponse.accessToken;
					
					//set logedin user
					FB.api('/me', function(response) {
					  if (response.name != undefined ) {

						$('#logger').append("<p>"+"Welcome, " + response.name+"</p>");
					  }         
					});
					
			} else if (response.status === 'not_authorized') {
					// the user is logged in to Facebook, 
					// but not connected to the app
			} else {
					$('#logger').append("<p>notlogedin yet</p>");
			}
		  
		});
	});
	App.initialize();
});
