/**
 * Created by 80474 on 2016/11/22.
 */
(function(angular){
// 引导页子路由模块
  angular.module('guidePage.route', ['guidePage.controller'])
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('guidePage', {
          url: '/guidePage',
          templateUrl: 'areas/guidePage/startPage.html',
          controller: 'GuidePageCtrl'
        })

    });
})(angular)
