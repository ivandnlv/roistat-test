<template>
  <div id="app">
    <the-table />
    <the-btn :on-click="openModal">Добавить</the-btn>
    <div v-if="tableState.isModalOpen">
      <the-modal />
    </div>
  </div>
</template>

<script>
import TheTable from '@/components/TheTable/TheTable.vue';
import { mapMutations, mapState } from 'vuex';
import TheModal from './components/Modal/TheModal.vue';
import TheBtn from './components/UI/TheBtn.vue';

export default {
  name: 'App',
  components: {
    TheTable,
    TheBtn,
    TheModal,
  },
  computed: {
    ...mapState({
      tableState: 'table',
    }),
  },
  methods: {
    ...mapMutations(['changeModalVisibility']),
    openModal() {
      this.changeModalVisibility(true);
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#app {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
