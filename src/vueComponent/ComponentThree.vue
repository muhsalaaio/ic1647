<template>
  <div>
    <div class="text-center bg-light mb-2 p-1" v-for="(photo, index) in photos" :key="index">
      <img :src="photo.thumbnailUrl" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
}
</script>
