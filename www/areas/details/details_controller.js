/**
 * Created by 80474 on 2016/11/28.
 */
(function(angular){
  angular.module('details.controller', ['details.service'])
    .controller('DetailsCtrl', function($scope,$ionicHistory,GlobalVariable,DetailsFty) {
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
  //进入商品详情页面，从服务模块中去取数据
  //  定义详情页面
      $scope.obj_goodsInfo={};
      var promise=DetailsFty.getDetailsData()
      promise.then(function(data){
        $scope.obj_goodsInfo=data;
      },function(e){}).then(function(){
        //初始化用户选择的数据
        $scope.obj_goodsDetailInfo = {
          goodsId: $scope.obj_goodsInfo.goodsId,
          isFork: $scope.obj_goodsInfo.isFork,
          description: $scope.obj_goodsInfo.description,
          src: $scope.obj_goodsInfo.src,
          price: $scope.obj_goodsInfo.price,
          color: "",
          size: "",
          number: 1
        }
      })
      //数量减1的方法
      $scope.func_jian1=function(){
        if($scope.obj_goodsDetailInfo.number!=1){
          $scope.obj_goodsDetailInfo.number--;
        }
      };
      //数量加1
      $scope.func_jia1=function(){
        $scope.obj_goodsDetailInfo.number++;
      }
      //商品添加到购物车的方法
      $scope.func_addToCart=function(){
          //在服务中注入操作indexDB数据库的服务
        var obj_newData={};
        // 硬拷贝方法，即创建一个对象
        angular.copy($scope.obj_goodsDetailInfo,obj_newData);
        //规定商品的id为goodsId+颜色+尺码组合
         obj_newData.goodsId=obj_newData.goodsId+obj_newData.color+obj_newData.size;
        $scope.obj_cartCount.count+=obj_newData.number;
        //先从数据库里面搜索购物车是否有相同类型的商品
        DetailsFty.getById(obj_newData.goodsId).then(function(data){
          if(!data){
          return DetailsFty.addToCart(obj_newData);
          }
          //代表有原来的商品，直接把数量更新即可
          obj_newData.number=parseInt(obj_newData.number)+parseInt(data.number);
          //修改到数据库中
          DetailsFty.updateCart(obj_newData);
        },function(e){
           console.log(e);
        })
        //console.log(obj_newData);

      };
      //返回历史上一页的方法
      $scope.goBack=function(){
        $ionicHistory.goBack();
      };
    })
})(angular)
