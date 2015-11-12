'use strict';

/**
 * @ngdoc function
 * @name jenkinsMonitorApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the jenkinsMonitorApp
 */
angular.module('jenkinsMonitorApp')
  .controller('ProjectsCtrl', function ($scope, Jenkins) {
   	Jenkins.getProjects().success(function(data){
   		$scope.jobs=[];
   		for(var i=0;i<data.jobs.length;i++){
   			var color;
   			if(data.jobs[i].color=="yellow"){
   				color="<a class='btn btn-warning btn-xs'><i class='fa fa-exclamation-triangle'></i><a>";
   			}else if(data.jobs[i].color=="blue"){
   				color="<a class='btn btn-success btn-xs'><i class='fa fa-check'></i><a>";
   			}else{
   				color="<a class='btn btn-info btn-xs'><i class='fa fa-hourglass-half'></i><a>";
   			}
   			$scope.jobs.push({
   				name:data.jobs[i].name,
   				color:color
   			})
   		}
   	});
  });
