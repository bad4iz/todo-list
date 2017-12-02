<template>
  <div class="hello">
    <v-list>
      <draggable  :options="{group:'people'}" @start="drag=true" @end="drag=true">
        <v-list-tile  v-for="item in searchTodo" v-bind:key="item.id" @click="clickTodo(item.id)">
          <v-list-tile-action>
            <v-icon v-if="item.done" color="pink">star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content  v-bind:class="{ done: item.done }">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
      
           <v-icon @click="deleteTodo(item.id)" >delete</v-icon>
        </v-list-tile>
      </draggable>
    </v-list>
   <!-- <todo :todo="todo" ></todo> -->
  </div>
</template>

<script>
import Todo from './todo';
import draggable from 'vuedraggable';

export default {
  name: 'todoLIst',
  components: { draggable, Todo },
  props: ['searchTodo'],
  data() {
    return {};
  },
  methods: {
    clickTodo: function(id) {
      this.$store.dispatch('updateTodo', id);
    },
    deleteTodo: function(id) {
      this.$store.dispatch('deleteTodo', id);
    }
  },
  computed: {
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
