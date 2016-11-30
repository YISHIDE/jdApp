/**
 * Created by 80474 on 2016/11/26.
 */
(function(angular){
  angular.module('goodsList.route', ['goodsList.controller'])
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('goodsList', {
          url: '/goodsList/:typeNumber',
          templateUrl: 'areas/goodsList/goodsList.html',
          controller: 'GoodsListCtrl'
        })

    });
})(angular)
