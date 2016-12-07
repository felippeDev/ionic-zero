// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])
angular.module('starter.controllers')

  .config(function ($stateProvider, $urlRouterProvider) {

    var config = {
      apiKey: "AIzaSyBUL63zSCSyCXodxJDBDJ1t9l4cpfTcFIU",
      authDomain: "starter-56861.firebaseapp.com",
      databaseURL: "https://starter-56861.firebaseio.com",
      storageBucket: "starter-56861.appspot.com",
      messagingSenderId: "462664844649"
    };
    firebase.initializeApp(config);

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: '/views/login.html',
        controller: 'LoginController'
      })

      .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'LoginController'
      })

      .state('menu', {
        url: '/menu',
        abstract: true,
        templateUrl: '/views/partials/menu.html',
      })

      .state('menu.messages', {
        url: '/messages',
        views: {
          'menuContent': {
            templateUrl: '/views/messages.html'
          }
        },
        controller: 'MessageController'
      })

      .state('menu.ionic', {
        url: '/ionic',
        views: {
          'menuContent': {
            templateUrl: '/views/ionic.html'
          }
        },
        controller: 'ContentController'
      })

    $urlRouterProvider.otherwise("/");

  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
