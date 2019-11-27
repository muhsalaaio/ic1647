import angular from 'angular';

export default angular.module('app.pageTwo', ['ui.router']).config([
  '$stateProvider',
  ($stateProvider) => {
    $stateProvider.state('pageTwo', {
      url: '/pageTwo',
      views: {
        'container@': {
          template: require('./pageTwo.html'),
        }
      }
    });
  }
]).name;
