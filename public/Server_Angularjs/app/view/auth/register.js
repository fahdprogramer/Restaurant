'use strict';
angular.module('myApp.register', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/register', {
        templateUrl: 'view/auth/register.html',
       controller: 'registerCtrl'
      });
    }])
    .controller('registerCtrl', function($scope,$http,$location) {


      

    $scope.checkRegister = function() {
	  
    
	  
	  var url ="http://localhost:8000/api/register";
	  
	  $http.post(url, {
            name: $scope.name,
	        email: $scope.email,
	        password: $scope.password,
	        password_confirmation: $scope.password_confirmation,
        }).then(function success(e) {
          $location.path( "/food" );
            $scope.message="success";
 
        }, function error(error) {
            $scope.message = "Wrong Login"; 
        });

        

     
   }

    	 });