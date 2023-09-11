import Vue from 'vue';
import Vuex from 'vuex';
import contactsModule from './contactsModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contacts: contactsModule,
  },
});
