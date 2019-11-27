<template>
  <div>
    <div class="card mb-2" v-for="(item, index) in photosData" :key="index">
      <img :src="item.src" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.content }}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>
