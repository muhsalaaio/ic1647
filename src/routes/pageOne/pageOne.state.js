import angular from 'angular';

export default angular.module('app.main', ['ui.router']).config([
  '$stateProvider',
  ($stateProvider) => {
    $stateProvider.state('pageOne', {
      url: '/pageOne',
      views: {
        'container@': {
          template: require('./pageOne.html'),
        }
      }
    });
  }
]).name;
