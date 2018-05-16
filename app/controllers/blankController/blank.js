'use strict';

angular.module('app.blank', [])

.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('blank', {
    templateUrl: 'app/controllers/blankController/blank.html',
    url: '/blank',
    controller: "blankCtrl",
    data: {
      authLevel: "common"
    }
  })
})

.controller('blankCtrl', function($http, $scope, $state) {
  $scope.init = () => {
    // $state.go('blocks');
  }
});