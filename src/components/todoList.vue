<template>
  <div class="hello">
    <v-list>
      <draggable  :options="{group:'people'}" @start="drag=true" @end="drag=true">
        <v-list-tile  v-for="item in searchTodo" v-bind:key="item.id" @click="clickTodo(item)">
          <v-list-tile-action @click="clickTodoDone(item.id)">
            <v-icon v-if="item.done" color="pink" >star</v-icon>
            <v-icon v-else color="grey" >star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content  v-bind:class="{ done: item.done }">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
      
           <v-icon @click="deleteTodo(item.id)" >delete</v-icon>
        </v-list-tile>
      </draggable>
    </v-list>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'todoLIst',
  components: { draggable},
  props: ['searchTodo'],
  data() {
    return {
    
    };
  },
  methods: {
    clickTodoDone: function(id) {
      this.$store.dispatch('updateTodo', id);
    },
    clickTodo: function(item) {
      this.$store.dispatch('todo', item);
    },
    deleteTodo: function(id) {
      this.$store.dispatch('deleteTodo', id);
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
