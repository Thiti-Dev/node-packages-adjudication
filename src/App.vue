<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from './components/pages/main/Main.vue';

@Component({
  components: {
    Main,
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
