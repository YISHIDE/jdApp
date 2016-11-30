/**
 * Created by 80474 on 2016/11/22.
 */
(function(angular){
// 引导页功能的业务逻辑
  angular.module('guidePage.controller', ['guidePage.service'])
    .controller('GuidePageCtrl', function($scope,$state,GlobalVariable,GuidePageFty,$ionicModal,$ionicActionSheet,$timeout,$ionicSlideBoxDelegate) {
      //console.log(GlobalVariable);
      //$scope.getPage=function(i)
      //{
      //  $ionicSlideBoxDelegate.slide(i)
      //  //alert(i);
      //};
      //$scope.page=function(i){
      //  console.log(i);
      //};
      //$ionicModal.fromTemplateUrl('modal.html', {
      //       scope: $scope,
      //     animation: 'slide-in-up'
      //  }).then(function(modal) {
      //     $scope.modal = modal;
      //   });
      //$scope.openModal = function() {
      //    $scope.modal.show();
      //  };
      //$scope.show=function(){
      //  var hideSheet = $ionicActionSheet.show({
      //    buttons: [
      //      { text: '<b>Share</b> This' },
      //      { text: 'Move' }
      //    ],
      //    destructiveText: 'Delete',
      //    titleText: 'Modify your album',
      //    cancelText: 'Cancel',
      //    cancel: function() {
      //      // add cancel code..
      //    },
      //    buttonClicked: function(index) {
      //     console.log(index);
      //    }
      //  });
      //
      //  //$timeout(function() {
      //  //  hideSheet();
      //  //}, 2000);
      //}
      ////swiper插件的使用
      //var mySwiper = new Swiper('.swiper-container', {
      //  autoplay: 3000,//可选选项，自动滑动
      //  pagination : '.swiper-pagination'
      //})

  //$scope.isSelect=true;
      //$scope.list=[{
      //  name:"豆瓣",
      //  value:"a"
      //},{
      //  name:"地铁",
      //  value:"b"
      //},{name:"香港",
      //  value:"c"
      //}];
      //$scope.select={
      //  select:""
      //};
      //$scope.kg="";
      //
      //引导页slide初始化
      $scope.$on("$ionicView.afterEnter",function(){
        var guideSlide = new Swiper('#guideSlide', {
          pagination: '.swiper-pagination',
          onSlideChangeEnd: function(swiper){
            var index = swiper.activeIndex+1;
            $("#tips-"+index).removeClass("hidden").addClass("guide-show");
          }
        });
      });

      $scope.func_goHome=function(){
        //进入主页面之前，标记第一次进入过该应用，下次就不进入引导页
        localStorage["isFirst"]=true;
         $state.go('tabs.home');
      }


























      // 点击按钮触发，或一些其他的触发条件
      //$scope.show = function() {
      //
      //  // 显示操作表
      //  $ionicActionSheet.show({
      //    buttons: [
      //      { text: '相机' },
      //      { text: '相册' },
      //    ],
      //    //destructiveText: 'Delete',
      //    titleText: '选择图片',
      //    cancelText: '取消',
      //    buttonClicked: function(index) {
      //
      //      switch (index){
      //        case 0:
      //          console.log(0);break;
      //        case 1:
      //          console.log(1);break;
      //
      //      }
      //      return true;
      //    }
      //  });
      //
      //};



      //$ionicModal.fromTemplateUrl('modal.html', {
      //  scope: $scope,
      //  animation: 'slide-in-up'
      //}).then(function(modal) {
      //  $scope.modal = modal;
      //});
      //$scope.openModal = function() {
      //  $scope.modal.show();
      //};
      //$scope.closeModal = function() {
      //  $scope.modal.hide();
      //};
      ////当我们用到模型时，清除它！
      //$scope.$on('$destroy', function() {
      //  $scope.modal.remove();
      //});
      //// 当隐藏的模型时执行动作
      //$scope.$on('modal.hide', function() {
      //  // 执行动作
      //});
      //// 当移动模型时执行动作
      //$scope.$on('modal.removed', function() {
      //  // 执行动作
      //});





      // 自动执行切换幻灯片的方法
      //setInterval(function(){
      //  $ionicSlideBoxDelegate.next();
      //},2000)
      // 幻灯片切换触发的事件
      //$scope.func_change=function(active){
      //  console.log(active);
      //}

    })


})(angular)
