/**
 * Application structure bootstraping.
 * @param {type} angular
 * @author Maria Villalba
 * @since Mon Nov 14 2016
 */
(function () {
  define([
    'angular',
    './core/main',
    // Application modules.
    './scanner/main',
    // Here application widgets
    './widgets/main'// Yeoman hook. Define section. Do not remove this comment.
  ],
    function (angular) {
      'use strict';

      var moduleName = 'app';

      angular.module(moduleName, [
        'ionic',
        'app.core',
        'app.scanner',
        'app.widgets'// Yeoman hook. Dependencies section. Do not remove this comment.
      ])

        .config(Config);

      Config.$inject = ['$ionicConfigProvider'];

      function Config($ionicConfigProvider) {
        // Configure the max pages to save in cache
        $ionicConfigProvider.views.maxCache(10);
      }

      return moduleName;

    });
})();