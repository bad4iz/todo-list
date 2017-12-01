import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [
      {
        id: 1,
        title: 'adfa'
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
    }
  },
  actions: {
    addTodo({ commit }, data) {
      const newTodoList = this.state.todoList.slice();
      console.log(newTodoList);
      newTodoList.push(data);
      commit('set', { type: 'todoList', newTodoList });
    }
  }
});

export default store;
