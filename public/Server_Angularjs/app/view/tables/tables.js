'use strict';
angular.module('myApp.tables', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/tables/:id_plat', {
        templateUrl: 'view/tables/tables.html',
        controller: 'tableCtrl'
      });
    }])

    .controller('tableCtrl', function($scope,$http,$location,$routeParams) {
      
      $scope.table_types = [];
      $scope.new_type = {};
      $scope.selected_idx;
      $scope.selected_type= {};
      $scope.message=null;
      $scope.update_data= {};

      $scope.init = function(){
        $http.get('http://localhost:8000/api/tables').success(function(data){
          $scope.table_types=data;
        });
      }

      $scope.init();

      $scope.create = function(){
        $http.post('http://127.0.0.1:8000/adminapi/food_type',$scope.new_type).success(function(data){

          $scope.table_types.push(data);
          $scope.new_type.name="";
          $scope.new_type.short_name="";
          $scope.new_type.base_price="";
          $scope.new_type.base_availability="";
          $scope.new_type.max_occupancy="";

        });
      };

      $scope.select_type = function(index){
        $scope.selected_idx=index;
        $scope.selected_type =$scope.table_types[index];
        var id_table= $scope.selected_type.id;
        $http.post('http://localhost:8000/api/reservation',{id_plat: $routeParams.id_plat,id_table: id_table,}).success(function(data){
        $scope.table_types = [];
        $scope.init();
          
            
        }).error(function(data){
          $scope.loginError = true;
          $scope.message="le nom ou le mode de pass est incorrect";
          $scope.isLogged = false;
           
        });

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

