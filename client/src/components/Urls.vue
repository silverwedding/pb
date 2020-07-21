<template>
  <ul>
    <li v-for="url in urls" :key="url.shortened">
      <Url :shortened="url.shortened" :url="url.url" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ShortenedUrl } from '@/models/ShortenedUrl';
import Url from '@/components/Url.vue';

@Component({
  components: {
    Url,
  },
})
export default class Urls extends Vue {
  @Prop() private urls!: ShortenedUrl[];
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

li {
  border: #2c3e50 0.2em solid;
  padding: 1.5em;
  margin: 1em;
}
</style>
