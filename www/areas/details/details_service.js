/**
 * Created by 80474 on 2016/11/28.
 */
(function(angular){
  angular.module('details.service', [])
    .factory('DetailsFty', function($http,$q,IndexdbJs,CommonJs) {
        return{
          getDetailsData:function(){
            //定义一个延迟对象
            var defered=$q.defer();
            //模拟异步请求获取数据信息
            setTimeout(function(){
              // 通过后台获取到的商品详细信息数据
              var obj_goodsInfo = {
                goodsId: "200067",
                description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
                price: "66",
                picture: [],
                src: "",
                isFork: false,
                colorGroup: [{name: "红色", value: "red"}, {name: "蓝色", value: "blue"}],
                sizeGroup: [{name: "s", value: "s"}, {name: "m", value: "m"}, {name: "l", value: "l"}]
              };
              //修改promise的状态调用then方法回调函数
              defered.resolve(obj_goodsInfo);
            },1000)
            return defered.promise;
          },
          addToCart:function(data){
             IndexdbJs.add('cart',data,function(){
               //alert("添加成功");
               CommonJs.AlertPopup("添加成功")
             })
          },
          getById:function(id){
            var defer=$q.defer();
            IndexdbJs.get(id,'cart',function(data){
              defer.resolve(data);
            },function(e){
              alert(e);
            });
            return defer.promise;
          },
          updateCart:function(data){
            IndexdbJs.update('cart',data,function(){
              //alert("添加成功");
              CommonJs.AlertPopup("修改成功")
            },function(e){
              //alert(e)
              CommonJs.AlertPopup(e);
            })
          },
          getAllData:function(){
            var defer=$q.defer();
            IndexdbJs.getAll('cart',function(data){
              defer.resolve(data);
            },function(){
              defer.reject("出错了");
            });
            return defer.promise;
          }
        }
    });
})(angular)
