<template>
  <div class="home">
    <AddUrl :add-url="addUrl" />
    <Urls :urls="urls" />
  </div>
</template>

<script lang="ts">
import Urls from '@/components/Urls.vue';
import { addShortenedUrl, getShortenedUrls } from '@/requests/shortenedUrls';
import { Component, Vue } from 'vue-property-decorator';
import AddUrl from '@/components/AddUrl.vue';

@Component({
  components: {
    AddUrl,
    Urls,
  },
})
export default class Home extends Vue {
  data() {
    return {
      urls: [],
    };
  }

  async created() {
    try {
      this.$data.urls = await getShortenedUrls();
    } catch (e) {
      console.error(e);
    }
  }

  async addUrl(url: string) {
    try {
      const shortenedUrl = await addShortenedUrl(url);
      if (shortenedUrl) {
        this.$data.urls.push(shortenedUrl);
      }
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
