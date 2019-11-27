const routerApp = angular.module('routerApp', ['ui.router', 'ngVue']);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// yesterday im still on ic-1647, editing the prototype, and investigate converse app on IE,
// today will replicate the case of converse with edited prototype


const bigCards = Vue.component('big-card-component', {
  template:`
  <div>
  <div class="card mb-2" v-for="(item, index) in photosData">
    <img :src="item.src" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text">{{ item.content }}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </div>
  </div>
  `,
  data: function () {
    return {
      photosData: [
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd9AfH_WLD3i6SMa_n_r3ffa4NP4l8LbsPwyqqXJ-6EsFDLOSQ', 
          content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          title: 'First Photos'
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1qXzNVCK8cLe64Y0SK2HIom4PE5FUenUt2NlPyhZJjaEBNkFC', 
          content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          title: 'Second Photos'
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXKE9EyeURrTIpaIIZiJdNrfZJUpg6frOLN8pGe2G9z3FPRQnJ', 
          content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          title: 'Third Photos'
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfrRht5KE_RdrsFtKWHFsKtBb5IiNBuEEuYKazaDrQjsWkSqEp', 
          content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          title: 'Fourth Photos'
        },
      ]
    }
  },
});

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
      const upperScope = this;
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(resp) {
          resp.data.map(function(item) { item.avatar = `https://picsum.photos/id/${randomIntFromInterval(1, 20)}/200/200` });
          upperScope.users = resp.data;
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

const carousel = Vue.component('carousel-component', {
  template: `
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" :class="{'active': index === 0}" v-for="(item, index) in photosData">
          <img :src="item.src" class="d-block w-100" alt="">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ item.title }}</h5>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  `,
  data: function () {
    return {
      photosData: [
        {
          src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', 
          content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          title: 'First Photos'
        },
        {
          src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=813&q=80', 
          content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          title: 'Second Photos'
        },
        {
          src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 
          content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          title: 'Third Photos'
        },
        {
          src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=824&q=80', 
          content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
          title: 'Fourth Photos'
        },
      ]
    }
  },
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
      const upperScope = this;
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(resp) {
          upperScope.users = resp.data;
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
      const upperScope = this;
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(resp) {
          upperScope.posts = resp.data;
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
      const upperScope = this;
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (resp) {
          upperScope.photos = resp.data.slice(0, 50);
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
routerApp.value('CarouselComponent', carousel)
routerApp.value('BigCardComponent', bigCards)