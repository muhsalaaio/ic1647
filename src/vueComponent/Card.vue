<template>
  <div class="row">
    <div class="col-md-3" v-for="(user, index) in users" :key="index">
      <div class="card">
        <img :src="user.avatar" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.company.catchPhrase }}</p>
        </div>
      </div>
    </div>
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
          resp.data.map(item => { item.avatar = `https://picsum.photos/id/${Math.floor(Math.random() * (20 - 1 + 1) + 1)}/200/200` });
          upperScope.users = resp.data;
        })
        .catch(function(err) {
          console.log(err);
        })
    },
  },
  created() {
    this.populate();
  }
}
</script>
