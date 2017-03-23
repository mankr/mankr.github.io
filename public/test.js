var app = angular.module('mittens', []);

		app.controller('mittensCtrl', function($scope, $http){
		
			$scope.submitNewMeow = function() {
				$http.post('/meows', {newMeow: $scope.newMeow}).then(function(){
					getMeows();
					$scope.newMeow = '';
				});
			};

			$scope.removeMeow = function(meow) {
				$http.put('/meows/remove', {meow: meow}).then(function(){
					getMeows();
					
				});
			};

			function getMeows() {
				$http.get('/meows').then(function(response) {

				$scope.meows = response.data;

			 });

			}

			getMeows();
		});
			