<template>
  <div>
    <span
      >Url: <a :href="url">{{ url }}</a></span
    >
    <span
      >Shortened Url: <a :href="shortened">{{ shortened }}</a></span
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Url extends Vue {
  @Prop() private url!: string;
  @Prop() private shortened!: string;
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

span {
  color: blue;
}

a {
  color: #2c3e50;
}
</style>
