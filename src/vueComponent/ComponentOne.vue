<template>
  <div>
    <div class="text-center bg-info mb-2 p-1" v-for="(user, index) in users" :key="index" >{{ user.name }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
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
}
</script>