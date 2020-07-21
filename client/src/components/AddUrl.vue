<template>
  <div>
    <label>
      <input v-model="url" type="url" />
    </label>
    <button @click.prevent="submitted">Add</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AddUrl extends Vue {
  @Prop() private addUrl!: (url: string) => void;
  url = '';

  submitted() {
    this.addUrl(this.url);
  }
}
</script>

<style scoped>
button {
  background: transparent;
  border: 0.1em solid #0063cc;
  border-radius: 1em;
  text-transform: uppercase;
  margin: 0.5em;
  padding: 0.5em 1.5em;
}

button:focus {
  outline: none;
  border: 0.1em solid #2c3e50;
}

input {
  background: transparent;
  border: 0.1em solid #0063cc;
  border-radius: 1em;
  margin: 0.5em;
  padding: 0.5em 1.5em;
}

input:focus {
  border-radius: 1em;
  border: 0.1em solid #2c3e50;
  outline: none;
}
</style>
