<template>
  <div>
    <div class="text-center bg-success mb-2 p-1" v-for="(post, index) in posts" :key="index">{{ post.body }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
}
</script>
