import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [
      {
        id: 1,
        title: 'первый',
        done: false
      },
      {
        id: 2,
        title: 'второй',
        done: false
      }
    ],
    todo: {}
  },
  getters: {
    todoList(state) {
      return state.todoList;
    },
    todo(state) {
      return state.todo;
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
    },
    updateId(state, { type, item }) {
      state[type] = state[type].map(el => {
        if (el.id === item) {
          el.done = !el.done;
        }
        return el;
        
      });
    },
    update(state, { type, item }) {
      state[type] = { ...state[type], item }
    }
  },
  actions: {
    addTodo({ commit }, data) {
      commit('push', { type: 'todoList', item: data });
    },
    todo({ commit }, data) {
      commit('set', { type: 'todo', item: data });
    },
    deleteTodo({ commit }, id) {
      commit('delete', { type: 'todoList', item: id });
    },
    updateTodo({ commit }, id) {
      commit('updateId', { type: 'todoList', item: id });
    },
    updDescription({ commit }, todo) {
      commit('update', { type: 'todoList', item: todo });
    }
  }
});

export default store;
