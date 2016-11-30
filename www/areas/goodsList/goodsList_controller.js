/**
 * Created by 80474 on 2016/11/26.
 */
(function(angular){
  angular.module('goodsList.controller', ['goodsList.service'])
    .controller('GoodsListCtrl', function($scope,$stateParams,GlobalVariable,GoodsListFty) {
      //console.log(1);
      $scope.obj_goodsListData=[];
      $scope.pms_isMoreItemsAvailable=true;
      //实际工作开发用到的
      // 分页查询对象
      //$scope.obj_pagingInfo = {
      //  amountMax: "",
      //  amountMin: "",
      //  billNum: "",
      //  createUser: "",
      //  dateFrom: "",
      //  dateTo: "",
      //  deptID: "",
      //  deptName: "",
      //  keyWord: "",
      //  loginName: "",
      //  billType: "",
      //  pageNum: 1,
      //  pageSize: 10,
      //  sortFlag: "0",
      //  sortType: "desc",
      //  typeNumber:""
      //};
      //在页面视图加载之前准备数据
      $scope.$on("$ionicView.beforeEnter",function(){
        //页面一加载，获取数据
        $scope.func_refreshGoodsList();
      });
      //模型中下拉刷新触发的方法
      $scope.func_refreshGoodsList=function(){
        //// 每次刷新的时候让页面重置为1
        //$scope.obj_pagingInfo.pageNum=1;
        //// 获取分类页面传过来的分类参数
        //$scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
        //// 把分页信息对象变为了字符串
        //var message=JSON.stringify($scope.obj_pagingInfo);
        var  promise=GoodsListFty.getAllData();
        promise.then(function(data){
          if(!data){
           return $scope.pms_isMoreItemsAvailable=false;
          }
          $scope.obj_goodsListData=data;
          $scope.pms_isMoreItemsAvailable=true;
        }).finally(function(){
          //停止广播
          $scope.$broadcast('scroll.refreshComplete');
        })
      };
      //模型中上拉加载更多
      $scope.func_loadMore=function(){
        //console.log(1);
        //// 获取更多数据的时候每次页码加1
        //$scope.obj_pagingInfo.pageNum= $scope.obj_pagingInfo.pageNum+1;
        //// 获取分类页面传过来的分类参数
        //$scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
        //// 把分页信息对象变为了字符串
        //var message=JSON.stringify($scope.obj_pagingInfo);
        //console.log(message);
        var promise=GoodsListFty.getMoreData();
        promise.then(function(data){
          //直接push到$scope
          //遍历
          if(!data){
            return $scope.pms_isMoreItemsAvailable=false;
          }
          $.each(data,function(index,item){
            $scope.obj_goodsListData.push(item);
            $scope.pms_isMoreItemsAvailable=true;
          })
        }).finally(function(){
          $scope.$broadcast('scroll.infiniteScrollComplete');
        })
      };
      //返回历史上一页的方法
      $scope.goBack=function(){
        $ionicHistory.goBack();
      };
    })

})(angular)
