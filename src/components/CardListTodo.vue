<template>
  <div
    style="max-width: 600px; margin: auto;"
    class="grey lighten-3"
  >
    <v-toolbar color="pink">
      <v-toolbar-title class="white--text" @click="clickSortTodo">
        <v-icon>{{iconSort.icon}}</v-icon>
        My ToDo List
      </v-toolbar-title>
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
          <todo-list :searchTodo="searchTodo"/>
        </v-flex>
      
      
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TodoList from '@/components/todoList';
export default {
  name: 'cardListTodo',
  components: { TodoList },
  data() {
    return {
      search: '',
      title: '',
      sortCount: 1,
      sortIcon: [
        {
          id: 0,
          icon: ''
        },
        {
          id: 1,
          icon: 'arrow_upward'
        },
        {
          id: 2,
          icon: 'arrow_downward'
        }
      ],
      iconSort: {}
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
    },
    clickSortTodo() {
      const coutn = this.sortCount++ % 3;
      const answer = this.sortIcon.filter(item => item.id === coutn);
      this.iconSort = answer[0];
      return answer;
    }
  },
  computed: {
    sortTodo() {
      switch (this.iconSort.id) {
        case 1:
          return this.$store.state.todoList.sort((one, two) => two.title > one.title);
          break;
        case 2:
          return this.$store.state.todoList.sort((one, two) => two.title < one.title);
          break;
        default:
          return this.$store.state.todoList;
      }
    },

    searchTodo() {
      const search = this.search.toUpperCase();
      return this.sortTodo.filter(item => ~item.title.toUpperCase().indexOf(search));
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
