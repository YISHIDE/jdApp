/**
 * Created by 80474 on 2016/11/24.
 */
(function(angular){
// 引导页子路由模块
  angular.module('home.route', ['home.controller'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('tabs.home', {
          url: '/home',
          views:{
            'tab-home':{
             templateUrl: 'areas/home/home.html',
             controller: 'HomeCtrl'
           }
          }
        })
    });
})(angular)
