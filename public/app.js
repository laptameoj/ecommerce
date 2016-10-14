// 'use strict';
angular.module('ecom', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
      .state('store', {
        url: '/',
        templateUrl: './views/store.html',
        controller: 'storeCtrl',
        controllerAs: 'store'
      })

      $urlRouterProvider.otherwise('/')
  })
