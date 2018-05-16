'use strict';

angular.module('app.home', [])

.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('home', {
    templateUrl: 'app/controllers/homeController/home.html',
    url: '/home',
    controller: "homeCtrl",
    data: {
      authLevel: "common"
    }
  })
})

.controller('homeCtrl', function($http, $scope, $state) {
  $scope.init = () => {
    // $state.go('blocks');
  }
});