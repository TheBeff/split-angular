angular.module('app')
  .factory('AuthService', function($http, $q){
    var _user = {};

    return {
      logOut: function() {
        var dfd = $q.defer();
        angular.copy({}, _user);
        dfd.resolve();
        return dfd.promise;
      },
      _user
    };
  });