angular.module('SplitGroups', ['ui.router'])
  .config(function($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  });