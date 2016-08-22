angular.module('jukeModule', []);

var app = angular.module('jukeModule');
// you could instead use a global `app` if you stored that reference
app.controller('testController', function ($scope) {
	$scope.name = 'Bruno';
});
