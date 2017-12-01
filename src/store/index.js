import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [
      {
        id: 1,
        title: 'первый'
      },
      {
        id: 2,
        title: 'второй'
      }
    ]
  },
  getters: {
    todoList(state) {
      return state.todoList;
    }
  },
  mutations: {
    set(state, { type, item }) {
      state[type] = item;
    },
    push(state, { type, item }) {
     state[type].push(item);
    },
    delete(state, { type, item }) {
     state[type] = state[type].filter(el => el.id !== item);
    }
  },
  actions: {
    addTodo({ commit }, data) {
      commit('push', { type: 'todoList', item: data });
    },
    deleteTodo({ commit }, id) {
      commit('delete', { type: 'todoList', item: id });
    },
  }
});

export default store;
