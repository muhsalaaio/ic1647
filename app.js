const routerApp = angular.module('routerApp', ['ui.router', 'ngVue']);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} 

const cards = Vue.component('card-component', {
  template: `
  <div class="row">
    <div class="col-md-3" v-for='user in users'>
      <div class="card">
        <img :src="user.avatar" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.company.catchPhrase }}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  data: function () {
    return {
      users: []
    }
  },
  methods: {
    populate() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(resp) {
          resp.data.map(function(item) { item.avatar = `https://picsum.photos/id/${randomIntFromInterval(1, 20)}/200/200` });
          this.users = resp.data;
        })
        .catch(function(err) {
          console.log(err);
        })
    }
  },
  created() {
    this.populate();
  }
});

const VComponent = Vue.component('hello-component', {
  template: `<div>
    <div class='text-center bg-info mb-2 p-1' v-for='user in users'>{{ user.name }}</div>
  </div>`,
  data: function () {
    return {
      users: []
    }
  },
  methods: {
    populate() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function() {
          this.users = resp.data;
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  },
  created() {
    this.populate();
  }
});

const VComponent2 = Vue.component('hello-component2', {
  template: `<div>
    <div class='text-center bg-success mb-2 p-1' v-for='post in posts'>{{ post.body }}</div>
  </div>`,
  data: function () {
    return {
      posts: []
    }
  },
  methods: {
    populate() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(resp) {
          this.posts = resp.data;
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  },
  created() {
    this.populate();
  }
});

const VComponent3 = Vue.component('hello-component3', {
  template: `<div>
    <div class='text-center bg-light mb-2 p-1' v-for='photo in photos'>
      <img :src="photo.thumbnailUrl" />
    </div>
  </div>`,
  data: function () {
    return {
      photos: []
    }
  },
  methods: {
    populate() {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (resp) {
          this.photos = resp.data.slice(0, 50);
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  },
  created() {
    this.populate();
  }
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/pageOne');
  $stateProvider
    .state('pageOne', {
      url: '/pageOne',
      templateUrl: 'templates/pageOne.html'
    })
    .state('pageTwo', {
      url: '/pageTwo',
      templateUrl: 'templates/pageTwo.html'
    })
    .state('pageThree', {
      url: '/pageThree',
      templateUrl: 'templates/pageThree.html'
    })
    .state('pageFour', {
      url: '/pageFour',
      templateUrl: 'templates/pageFour.html'
    })
    .state('pageFive', {
      url: '/pageFive',
      templateUrl: 'templates/pageFive.html'
    })
    .state('pageSix', {
      url: '/pageSix',
      templateUrl: 'templates/pageSix.html'
    })
    .state('pageSeven', {
      url: '/pageSeven',
      templateUrl: 'templates/pageSeven.html'
    })
});


routerApp.controller('MainController', function () {
  this.person = {
    firstName: 'The',
    lastName: 'World'
  }
})

routerApp.value('HelloComponent', VComponent)
routerApp.value('HelloComponent2', VComponent2)
routerApp.value('HelloComponent3', VComponent3)
routerApp.value('CardComponent', cards)