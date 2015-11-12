'use strict';

/**
 * @ngdoc function
 * @name jenkinsMonitorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jenkinsMonitorApp
 */
angular.module('jenkinsMonitorApp')
  .controller('MainCtrl', function ($scope, $location) {
   	$scope.login=function(){
   		$location.path('/projects');
   	};
  });
