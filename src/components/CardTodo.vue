<template>
<div
    style="min-width: 300px; margin: auto;"
    class="grey lighten-3"
  >
    <v-toolbar color="grey">
      <v-toolbar-title class="white--text" >
        <v-icon>today</v-icon>
        {{todo.title}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon >save</v-icon>
    </v-toolbar>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >


     <v-layout row>
        <v-flex>
          <v-text-field
            name="input-7-2"
            label="описание дела"
            v-model="todo.description"
            class="input-group--focused"
            multi-line
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'todo',

  data() {
    return {};
  },
  methods: {
    save() {
      this.$store.dispatch('updDescription', this.todo);
    }
  },
  computed: {
    todo() {
      return this.$store.getters.todo;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
