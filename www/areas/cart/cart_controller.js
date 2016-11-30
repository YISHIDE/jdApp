/**
 * Created by 80474 on 2016/11/28.
 */
(function(angular){
  angular.module('cart.controller', ['cart.service'])
    .controller('CartCtrl', function($scope,GlobalVariable,CartFty) {
      $scope.obj_cartDbData={
        data:[],
        total:0
      };
      $scope.$on('$ionicView.beforeEnter', function (e) {
        getAllData();
      });
      function getAllData(){
        CartFty.getAlldata().then(function(data){
          if(data.length){
            $scope.obj_cartDbData.total=0;
            $scope.obj_cartDbData.data=data;
            //计算购物车合计的价格
            data.forEach(function(item,index){
              $scope.obj_cartDbData.total+=item.number*item.price;
            })
          }
        },function(e){
          console.log(e)
        })
      };
      //数量加1操作并反馈到数据库中
      $scope.func_jia1=function(id){
        //先通过商品id号找到对应的商品，然后商品的数量加1，最后反馈到数据库中,最后重新绑定数据
        CartFty.getById(id).then(function(data){
          if(data){
            data.number++;
           //修改
            CartFty.updateCart(data);
            //重新向数据库中载入数据
            getAllData();
          }
        },function(e){
          console.log(e);
        })
      };
      $scope.func_jian1=function(id){
        //先通过商品id号找到对应的商品，然后商品的数量减1，最后反馈到数据库中,最后重新绑定数据
        CartFty.getById(id).then(function(data){
          if(data){
            data.number--;
            //修改
            CartFty.updateCart(data);
            //重新向数据库中载入数据
            getAllData();
          }
        },function(e){
          console.log(e);
        })
      };
      //返回历史上一页的方法
      $scope.goBack=function(){
        $ionicHistory.goBack();
      };
    })
})(angular)
