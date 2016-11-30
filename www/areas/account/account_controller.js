/**
 * Created by 80474 on 2016/11/28.
 */
(function(angular){
  angular.module('account.controller', ['account.service'])
    .controller('AccountCtrl', function($scope,GlobalVariable,AccountFty,$cordovaCamera,$ionicActionSheet) {
         //展示选项
      //进入之前判断localStorage里有没有base64位图片流
      if(localStorage["touxiang"]){
        var image = document.getElementById('touxiang');
        image.src = "data:image/jpeg;base64," + localStorage["touxiang"];
      }
      $scope.func_showAction=function(){

        // 显示操作表
        $ionicActionSheet.show({
          buttons: [
            { text: '照相机' },
            { text: '图库' },
          ],
          titleText: '请选择文件源',
          cancelText: '取消',
          buttonClicked: function(index) {
            switch(index){
              case 0:func_getPicFromCamera();
                break;
              case 1:func_getPicFromPicture();
                break;
            }
            return true;
          }
        });
      }
      //在摄像头中获取数据
      function func_getPicFromCamera(){
        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
          var image = document.getElementById('touxiang');
          image.src = "data:image/jpeg;base64," + imageData;
          localStorage["touxiang"]=imageData;
        }, function(err) {
          //$scope.AlertPopup(err);
        });
      };
      //在图库中获取数据
      function func_getPicFromPicture(){
        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
          var image = document.getElementById('touxiang');
          image.src = "data:image/jpeg;base64," + imageData;
          localStorage["touxiang"]=imageData;
        }, function(err) {
          //$scope.AlertPopup(err);
        });
      };
    })
})(angular)
