angular.module('app')
  .config(function($stateProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: '/browser/app/auth/auth.template.html',
      });
  });