angular.module('app')
  .config(function($stateProvider){
    $stateProvider.state('home', {
      url: '/',
      templateUrl: '/browser/app/home/home.template.html'
    });
  });