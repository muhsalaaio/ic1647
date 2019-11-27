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

exports.carousel = carousel;
