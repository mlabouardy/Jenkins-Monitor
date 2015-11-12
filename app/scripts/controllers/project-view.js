'use strict';

/**
 * @ngdoc function
 * @name jenkinsMonitorApp.controller:ProjectViewCtrl
 * @description
 * # ProjectViewCtrl
 * Controller of the jenkinsMonitorApp
 */
angular.module('jenkinsMonitorApp')
  .controller('ProjectViewCtrl', function ($scope, $http, Jenkins, $routeParams) {
  		$http.get('http://51.254.132.239:8082/api/json?depth=1').success(function(data){
            var jobs=data.jobs;
            for(var i=0;i<jobs.length;i++){
              if(jobs[i].displayName==$routeParams.name){
              	$scope.builds=jobs[i];
              }
            }
        }).error(function(){
        	console.log('error');
        });
    	
  });
