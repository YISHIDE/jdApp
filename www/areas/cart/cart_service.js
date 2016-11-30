/**
 * Created by 80474 on 2016/11/28.
 */
(function(angular){
  angular.module('cart.service', ['details.service'])
    .factory('CartFty', function(DetailsFty) {
      return{
        getAlldata:DetailsFty.getAllData,
        getById:DetailsFty.getById,
        updateCart:DetailsFty.updateCart
      }
    });
})(angular)
