'use strict';
angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/login', {
        templateUrl: 'view/auth/login.html',
        controller: 'loginCtrl'
      });
    }])

    .controller('loginCtrl', function($scope,$http,$location,$interval) {
//$scope.ibrahim="kqfmkdjmfkqjmkldsjklfqjmkljfqskdljf"

//     --------------time------------------
$scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);


//     --------------/time------------------

    //$scope.isLogged = true;

     

    $scope.checkLogin = function(){


        $http.post('http://localhost:8000/api/login',{email: $scope.email,password: $scope.password,}).success(function(data){
          //console.log(data);
          $scope.f="fahd";
         // localStorage.setItem('token',data.token);
         // localStorage.setItem("token", data.token);
       //  $http.defaults.headers.common.Authorization =data;
        // $scope.isLogged = true;
        // $location.path( "/food" );
         // $scope.message=$cookies.get('token');;//"success";
          
            
        }).error(function(data){
          $scope.f="fahd";
          $scope.loginError = true;
          $scope.message=$scope.f;//"le nom ou le mode de pass est incorrect";
          $scope.isLogged = false;
           
        });
      };

    /*function() {
	  
    
	  
	  var url ="http://localhost:8000/api/user/login";
	  
	  $http.post(url, {
	        email: $scope.email,
	        password: $scope.password,
        }).then(function success(e) {
            $scope.message="success";
            $scope.isLogged = true;
           // window.location = '#/TableAdmin';
 
        }, function error(error) {
            $scope.message = "Wrong Login"; 
        });

     
   }*/
    		

    	 }
);
