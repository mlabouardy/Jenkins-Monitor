'use strict';

/**
 * @ngdoc overview
 * @name jenkinsMonitorApp
 * @description
 * # jenkinsMonitorApp
 *
 * Main module of the application.
 */
angular
  .module('jenkinsMonitorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
      })
      .when('/project/:name', {
        templateUrl: 'views/project-view.html',
        controller: 'ProjectViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
