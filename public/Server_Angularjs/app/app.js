'use strict';

// Declare app level module which depends on views, and components
var myApp= angular.module('myApp', [
  'ngRoute',



  'myApp.root',
 
 
  'myApp.login',
  'myApp.register',
  'myApp.food',
  'myApp.tables',

]).
config(['$routeProvider', function($routeProvider) {

      $routeProvider.otherwise({redirectTo: '/'});

    }])
.service('reservationData', function () {

  var hashtable = {};

  return {
    setValue: function (key, value) {
      hashtable[key] = value;
    },
    getValue: function (key) {
      return hashtable[key];
    }
  }
});


