'use strict';

/**
 * @ngdoc service
 * @name jenkinsMonitorApp.Jenkins
 * @description
 * # Jenkins
 * Factory in the jenkinsMonitorApp.
 */
angular.module('jenkinsMonitorApp')
  .factory('Jenkins', function ($http) {
    
    var url="http://51.254.132.239:8082/api/json";

    return {
      getProjects: function () {
        return $http.get(url);
      },
      getProjectInfo:function(name){
        $http.get(url+'?depth=1').success(function(data){
            var jobs=data.jobs;
            for(var i=0;i<jobs.length;i++){
              if(jobs[i].displayName==name)
                return jobs[i];
            }
        });
      }
    };
  });
