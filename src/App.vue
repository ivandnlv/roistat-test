<template>
  <div id="app">
    <the-table />
    <the-btn :on-click="openModal">Добавить</the-btn>
    <div v-if="isModalOpen">
      <the-modal :close-modal="closeModal">
        <create-contact :close-modal="closeModal" />
      </the-modal>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import TheTable from '@/components/TheTable/TheTable.vue';
import TheModal from '@/components/Modal/TheModal.vue';
import TheBtn from '@/components/TheBtn.vue';
import CreateContact from './components/CreateContact.vue';

export default {
  name: 'App',
  components: {
    TheTable,
    TheBtn,
    TheModal,
    CreateContact,
  },
  computed: {
    ...mapState(['contacts']),
  },
  methods: {
    ...mapMutations(['setContacts', 'setSortedContacts']),
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  data: () => ({
    isModalOpen: false,
  }),
  created() {
    const localContacts = localStorage.getItem('contacts');
    const localSortedContacts = localStorage.getItem('sortedItems');

    if (localContacts) {
      this.setContacts(JSON.parse(localContacts));
    }

    if (localSortedContacts) {
      this.setSortedContacts(JSON.parse(localSortedContacts));
    }
  },
  watch: {
    'contacts.items': {
      handler(val) {
        localStorage.setItem('contacts', JSON.stringify(val));
      },
    },
    'contacts.sortedItems': {
      handler(val) {
        localStorage.setItem('sortedItems', JSON.stringify(val));
      },
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
