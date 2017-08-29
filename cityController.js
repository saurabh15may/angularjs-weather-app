
(function(){
  
     var app = angular.module("weatherApp",[]);
     var cityController = function($scope, cityRepoService){
  
     var onFetchError = function(message){
         $scope.error = "Error Fetching Cities. Message:" +message;
       };
       
      var onFetchCompleted = function(data){
        $scope.cities =data;
      };
       
      var getCities = function(){
        cityRepoService.get().then(onFetchCompleted,onFetchError);
      }; 

      getCities();     

    };
    
     app.controller("cityController", cityController);
    
  }());