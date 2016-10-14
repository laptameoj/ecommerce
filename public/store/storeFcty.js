'use strict';
angular.module('ecom')
  .factory('storeFcty', storeFcty)

function storeFcty($http, $q){
  return {
    getProducts
  }

  function getProducts(){
    return $http.get('/api/products')
  }
}
