import Vue from 'vue';
import Vuex from 'vuex';
import tableModule from './tableModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    table: tableModule,
  },
});
