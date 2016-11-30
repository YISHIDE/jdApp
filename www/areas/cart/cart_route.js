/**
 * Created by 80474 on 2016/11/28.
 */
(function(angular){
  angular.module('cart.route', ['cart.controller'])
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('cart', {
          url: '/cart',
          templateUrl: 'areas/cart/cart.html',
          controller: 'CartCtrl'
        })

    });
})(angular)
