define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

window.fbAsyncInit = function() {
	FB.init({
          appId: '425059737529132',
          cookie: true,
          xfbml: true,
          oauth: true
        });

    FB.getLoginStatus(function(response) {
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

			$('#page').text("Welcome, " + response.name); //TODO: replace with better code than this junk
          }         
        });
      } else if (response.status === 'not_authorized') {
        // the user is logged in to Facebook, 
        // but not connected to the app
      } else {
        $('#page').text("notlogedin yet"); 
      }

    });        

	
    // Additional initialization code here
	
	//this code replaces the of the shelf login button
	/*$('#fb-login-button-custom').show().click(function () {
			var scopeList = $(this).data('scope');
			FB.login(function (response) {
				alert('FB.login callback');
				        FB.api('/me', function(response) {
			  if (response.name != undefined ) {
				console.log("Welcome, " + response.name);
			  }         
			});
				console.log(response);
				document.location.href = document.location.pathname + '?fblogin=1';
			}, { scope: scopeList });
		});*/ 
	  };

    (function() {
        var e = document.createElement('script'); e.async = true;
        e.src = document.location.protocol +
          '//connect.facebook.net/en_US/all.js';
        document.getElementById('fb-root').appendChild(e);
      }());

  return {};
});

