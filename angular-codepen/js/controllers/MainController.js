app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.mycodepens = [
  {
      name: 'Angular Pagination',
      description: 'Use Angular UI Bootstrap for pagination',
      author: 'Rattanak',
      codepen: "http://codepen.io/rattanakchea/pen/dozqjQ"
    },
   {
      name: 'Handlebar templating',
      description: 'Use handlebar for templating, and jquery pagination plugin',
      author: 'Rattanak',
      codepen: "http://codepen.io/rattanakchea/pen/LVbEPV"
    },
    {
      name: 'Programming Challenge',
      description: 'Find first non-repeated element in array',
      author: 'Rattanak',
      codepen: "http://codepen.io/rattanakchea/pen/GJEmeO"
    }
  ];

   $scope.favorites = [
    {
      name: 'Simple Calculator',
      description: 'Beautiful + functional calculaotr',
      author: 'GeoffStorbeck',
      codepen: "http://codepen.io/GeoffStorbeck/pen/zxgaqw"
    },
    {
      name: 'Local Weather',
      description: 'Jquery to fetch from weather api',
      author: 'AdventureBear',
      codepen: "http://codepen.io/AdventureBear/pen/yNBJRj"
    }
  ];

}]);