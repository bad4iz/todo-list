<template>
   <v-layout>
      <v-flex xs12>
        <v-container>
          <v-layout row wrap>
            <card-list-todo/>
            <card-todo v-if="todo.title"/>
          </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import CardTodo from '@/components/CardTodo';
import CardListTodo from '@/components/CardListTodo';
export default {
  name: 'index',
  components: { CardTodo, CardListTodo },
  data() {
    return {};
  },
  methods: {},
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
