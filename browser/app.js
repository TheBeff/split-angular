angular.module('app', ['ui.router'])
  .config(function($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  })
  .directive('appNav', function(){
    return {
      templateUrl: '/browser/appNav.html',
      controller: function(AuthService, $state, $scope) {
        $scope.logOut = function() {
          $scope.user = AuthService._user;
          AuthService.logOut()
            .then(function() {
              $state.go('home');
            });
        };
      }
    };
  });