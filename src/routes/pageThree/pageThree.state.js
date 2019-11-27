import angular from 'angular';

export default angular.module('app.pageThree', ['ui.router']).config([
  '$stateProvider',
  ($stateProvider) => {
    $stateProvider.state('pageThree', {
      url: '/pageThree',
      views: {
        'container@': {
          template: require('./pageThree.html'),
        }
      }
    });
  }
]).name;
