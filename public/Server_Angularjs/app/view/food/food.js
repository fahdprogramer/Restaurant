'use strict';
angular.module('myApp.food', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/food', {
        templateUrl: 'view/food/food.html',
        controller: 'foodCtrl'
      });
    }])

    .controller('foodCtrl', function($scope,$http,$location) {

      $scope.food_types = [];
      $scope.new_type = {};
      $scope.selected_idx;
      $scope.selected_type= {};
      $scope.message=null;
      $scope.update_data= {};
      $scope.isLogged = true;

      $scope.init = function(){
/*
        $http({
    method: 'GET',
    url: 'http://localhost:8000/api/plats',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
  }).success(function(data){
          $scope.food_types=data;
          $scope.isLogged = true;
        });
*/




        $http.get('http://localhost:8000/api/plats').success(function(data){
          $scope.food_types=data;
          $scope.isLogged = true;
        });
$scope.isLogged = true;

      }

      $scope.init();

      $scope.create = function(){
        $http.post('http://127.0.0.1:8000/adminapi/food_type',$scope.new_type).success(function(data){

          $scope.food_types.push(data);
          $scope.new_type.name="";
          $scope.new_type.short_name="";
          $scope.new_type.base_price="";
          $scope.new_type.base_availability="";
          $scope.new_type.max_occupancy="";

        });
      };

      $scope.select_type = function(index){
        $scope.selected_idx=index;
        $scope.selected_type =$scope.food_types[index];
        var id_plat= $scope.selected_type.id;
        $location.path( "/tables/"+id_plat);

      };

      $scope.setprice = function(){

        $http.post('/adminapi/setpriceinrange',$scope.update_data).success(function(data){
          $scope.selected_idx=-1;
          $scope.selected_type=null;
          $scope.update_data={};

          $scope.message = data;
        });

      }
    }
);

