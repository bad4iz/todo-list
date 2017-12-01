<template>
  <div class="hello">
    <v-list>
      <draggable v-model="todoList" :options="{group:'people'}" @start="drag=true" @end="drag=false">
        <v-list-tile avatar v-for="item in todoList" v-bind:key="item.id" @click="clickTodo(item.id)">
          <v-list-tile-action>
            <v-icon v-if="item.done" color="pink">star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <img v-bind:src="item.avatar"/>
          </v-list-tile-avatar>
        </v-list-tile>
      </draggable>
    </v-list>
   <todo :todo="todo" ></todo>
  </div>
</template>

<script>
import Todo from './todo';
import draggable from 'vuedraggable';

export default {
  name: 'todoLIst',
  components: { draggable, Todo },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      todo: ''
    };
  },
  methods: {
    // clickTodo: function(id) {
    //   this.todo = this.todoList().filter(item => item.id === id);
    // }
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
