import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      cards: [
        {
          title: '"Город сыра и мира"',
          rate: 5,
          type: 'Историческая',
          way: 'На автобусе',
          date: '28 марта',
          duration: '9 часов',
          quantity: '',
        },
        {
          title: 'Экскурсия в национальный парк "Куршская коса"',
          rate: 5,
          type: 'Обзорная',
          way: 'На автобусе',
          date: '25 марта',
          duration: '6 часов',
          quantity: '',
        },
        {
          title: '"О кирхах, рыцарях и замках"',
          rate: 5,
          type: 'Историческая',
          way: 'На автобусе',
          date: '29 марта',
          duration: '6 часов',
          quantity: '',
        },
        {
          title: 'Экскурсия в Янтарный',
          rate: '',
          type: 'Историческая',
          way: 'На автобусе',
          date: '29 марта',
          duration: '6 часов',
          quantity: 'до 49',
        },
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
