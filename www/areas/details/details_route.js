/**
 * Created by 80474 on 2016/11/28.
 */
(function(angular){
  angular.module('details.route', ['details.controller'])
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('details', {
          url: '/details/:goodsId',
          templateUrl: 'areas/details/details.html',
          controller: 'DetailsCtrl'
        })

    });
})(angular)
