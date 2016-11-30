/**
 * Created by 80474 on 2016/11/24.
 */
(function(angular){
  angular.module('tabs.controller', ['details.service'])
    .controller('TabCtrl', function($scope,DetailsFty) {
      //页面一加载之前购物车数量从数据库中读取
      $scope.$on('$ionicView.beforeEnter', function (e) {
        $scope.obj_cartCount={
          count:0
        }
        DetailsFty.getAllData().then(function(data){
          if(data.length>0){
            data.forEach(function(item,index){
              $scope.obj_cartCount.count+=parseInt(item.number);
            })
          }
        },function(e){
          console.log(e)
        })
      });
    });
})(angular)
