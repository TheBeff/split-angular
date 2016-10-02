angular.module('SplitGroups')
  .config(function($stateProvider){
    $stateProvider.state('home', {
      url: '/',
      template: 'Hello'
    });
  });