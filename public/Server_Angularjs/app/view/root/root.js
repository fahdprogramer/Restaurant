'use strict';

angular.module('myApp.root', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'view/root/root.html',
        controller: 'root'
      });
    }])

    .controller('root', function($scope,$http,$location) {

      
    }
);

