/**
 * Created by 80474 on 2016/11/22.
 */
/**
 * 总路由模块
 * Created by shiguoqing on 2016/4/1.
 */

angular.module('route', ['guidePage.route','tabs.route','home.route','category.route','goodsList.route','details.route','cart.route','account.route'])
  .config(function($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/tabs/home');
    if(localStorage["isFirst"]){
      $urlRouterProvider.otherwise('/tabs/home');
    }
    else{
      $urlRouterProvider.otherwise('/guidePage');
    }
  });
