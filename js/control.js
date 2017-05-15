// ---------- Controller(s). ----------
	
// Add student Cotnroller
app.controller('searchController', ['$scope','$http', function($scope,$http,$window,$location){
    // Storing user details
		
		
			// Calling HTTP response
		function success(response){
				        //$scope.status = response.Response;
                        $scope.title=response.Title;
                        $scope.year=response.Year;
                        $scope.imdbid=response.imdbID;
                        $scope.type=response.Type;
                        $scope.poster=response.Poster;
		}	
        
    function error(){
        $scope.status = response.status;
    }

	
		// function calling all other functions
   $scope.search = function() {
       if(($scope.t) && (!$scope.y) ){
       
            $http({
					method : 'GET',
					headers: {'Content-Type': 'application/json'},
					url : 'http://www.omdbapi.com/?t='+$scope.t+'&type=movie'
				  }).then(function mySuccess(response) {     //function for taking actions when the status code is 200 and authentication is a success. 
						// Binds messages to display to html pages	
                        success(response.data);
						
					}).catch(function error(response) {           //function for taking actions when response is an error.
						// Binds messages to display to html pages						
						error(response.data);
					});
                }
       if(($scope.y) && (!$scope.t) ){
       
            $http({
					method : 'GET',
					headers: {'Content-Type': 'application/json'},
					url : 'http://www.omdbapi.com/?y='+$scope.y+'&type=movie'
				  }).then(function mySuccess(response) {     //function for taking actions when the status code is 200 and authentication is a success. 
						// Binds messages to display to html pages	
                        success(response.data);
						
					}).catch(function error(response) {           //function for taking actions when response is an error.
						// Binds messages to display to html pages						
						error(response.data);
					});
                }
       if(($scope.t) && ($scope.y)){
              $http({
					method : 'GET',
					headers: {'Content-Type': 'application/json'},
					url : 'http://www.omdbapi.com/?t='+$scope.t+'&y='+$scope.y+'&type=movie'
				  }).then(function mySuccess(response) {     //function for taking actions when the status code is 200 and authentication is a success. 
						// Binds messages to display to html pages	
                        success(response.data);
						
					}).catch(function error(response) {           //function for taking actions when response is an error.
						// Binds messages to display to html pages						
						error(response.data);
					});
                }
       
                $scope.template ='html/mlist.html';
            }
                
}]);


// Fetch information Controller

//Directive creation for login page
var myDirectives = angular.module('myDirectives', []);

	myDirectives.directive('myMovie', function() {
	  return {
		restrict: 'AE',
		scope: false, // This indicates the scope to be false, leading to no confliction in passing of data from directive to controller
		templateUrl: 'html/mlist.html'  // This calls the html file mlist
	  };
	});
