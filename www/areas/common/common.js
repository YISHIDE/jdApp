/**
 * Created by 80474 on 2016/11/28.
 */
(function(angular){
  angular.module('commonJs', [])
    .factory('CommonJs', ['$ionicPopup',function ($ionicPopup) {
      return {
        // 弹出提示框
        AlertPopup:function(message){
          var alertPopup = $ionicPopup.alert({
            title: '提示',
            template: message
          });
          alertPopup.then(function(res) {
            console.log('');
          });
        }
      }
    }]);
})(angular)
