/**
 * Created by 80474 on 2016/11/28.
 */
(function(angular){
  (function(angular){
    angular.module('account.route', ['account.controller'])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('account', {
            url: '/account',
            templateUrl: 'areas/account/account.html',
            controller: 'AccountCtrl'
          })
      });
  })(angular)
})(angular)
