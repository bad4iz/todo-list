<template>
  <div
    id="e3"
    style="max-width: 600px; margin: auto;"
    class="grey lighten-3"
  >
    <v-toolbar color="pink">
      <v-toolbar-title class="white--text">My ToDo List</v-toolbar-title>
      <v-spacer></v-spacer>
               <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>

    </v-toolbar>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >

    <v-text-field class='p'
      label="add Todo"
      v-model="title"
      :counter="10"
      required
      @keyup.enter="addTodo"
    ></v-text-field>

      <v-layout row wrap>
        <v-flex xs12>
          <todo-list/>
        </v-flex>
      
      
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TodoList from '@/components/todoList';
export default {
  name: 'index',
  components: { TodoList },
  data() {
    return {
      search: '',
      title: ''
    };
  },
  methods: {
    addTodo() {
      if (!this.title) return;
      const data = {
        id: Date.now(),
        title: this.title,
        done: false
      };
      this.$store.dispatch('addTodo', data);
      this.title = '';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.input-group__details:before {
  background-color: rgba(0, 0, 0, 0.42);
}
</style>
