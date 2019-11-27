import angular from 'angular';
import 'angular-ui-router';
import 'ngVue';

import BigCard from './vueComponent/BigCard.vue';
import Card from './vueComponent/Card.vue';
import Carousel from './vueComponent/Carousel.vue';
import ComponentOne from './vueComponent/ComponentOne.vue';
import ComponentTwo from './vueComponent/ComponentTwo.vue';
import ComponentThree from './vueComponent/ComponentThree.vue';

import pageOneState from './routes/pageOne/pageOne.state';
import pageTwoState from './routes/pageTwo/pageTwo.state';
import pageThreeState from './routes/pageThree/pageThree.state';

angular
  .module('app', [
    'ui.router', 
    'ngVue',

    // routes
    pageOneState,
    pageTwoState,
    pageThreeState
  ])
  // .config(function($urlRouterProvider) {
  //   $urlRouterProvider.otherwise('/pageOne')
  // })
  .value('HelloComponent', ComponentOne)
  .value('HelloComponent2', ComponentTwo)
  .value('HelloComponent3', ComponentThree)
  .value('CardComponent', Card)
  .value('CarouselComponent', Carousel)
  .value('BigCardComponent', BigCard)
  .run(run);

function run($state) {
  $state.go('pageOne');
}

run.$inject = ['$state']