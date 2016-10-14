  'use strict';
  angular.module('ecom')
    .controller('storeCtrl', storeCtrl)

    function storeCtrl(storeFcty){
      const store = this

      store.test = 'A string'
      store.getProducts = getProducts;
      store.getProducts();


      function getProducts(){
        storeFcty.getProducts()
          .then(function(results){
          store.books = results.data
        })
      }
    }
