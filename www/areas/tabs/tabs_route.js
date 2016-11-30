/**
 * Created by 80474 on 2016/11/24.
 */
(function(angular){
// 引导页子路由模块
  angular.module('tabs.route', ['tabs.controller'])
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('tabs', {
          url: '/tabs',
          abstract: true,
          templateUrl: 'areas/tabs/tabs.html',
          controller: 'TabCtrl'
        })

    });
})(angular)
