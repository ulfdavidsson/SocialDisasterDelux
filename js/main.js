require.config({
  shim: {
    'facebookWrapper' :{
	  exports: 'facebookWrapper'
	},
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
    templates: '../templates'
  }

});

require([
  'app',
  'facebookWrapper'
], function(App){
		App.initialize();
});
