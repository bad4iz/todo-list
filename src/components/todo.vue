<template>
  <v-container>
    <v-layout row wrap>
     asfsdf
     {{todo}}
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'todo',
  props: ['todo'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
