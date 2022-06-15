<template>
  <v-card style="display: flex; justify-content: center;">
    <v-card class="picture">
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          class="ma-5"
          reverse-transition="fade-transition"
          transition="fade-transition"
        />
      </v-carousel>
    </v-card>
    <v-card class="picture">
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          class="ma-5"
          reverse-transition="fade-transition"
          transition="fade-transition"
        />
      </v-carousel>
    </v-card>
    <v-card class="picture">
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          class="ma-5"
          reverse-transition="fade-transition"
          transition="fade-transition"
        />
      </v-carousel>
    </v-card>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<style>
  .picture {
    width: 500px;
  }
</style>
