app.directive("codepenListing", function(){
	return {
		restrict: 'E',
		scope: {
			listing: '='
		},
		templateUrl: 'js/directives/codepenListing.html'
	}
});