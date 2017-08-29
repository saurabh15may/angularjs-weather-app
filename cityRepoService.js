(function(){
    
    var cityRepoService = function($http){
    var getCities = function(username){
        return $http.get("http://localhost:8080/cities")
                    .then(function(response){
                        return response.data; 
                    });
      };
      return {
          get: getCities
      };
        
    };
    var module = angular.module("weatherApp");
    module.factory("cityRepoService", cityRepoService);
    
}());