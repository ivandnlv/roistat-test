export default {
  state: {
    items: [
      { id: 1, name: 'Вася', phone: '8923131' },
      { id: 2, name: 'Виктор', phone: '893423424' },
      { id: 3, name: 'Михаил', phone: '89214141' },
      { id: 4, name: 'ВасЁк', phone: '89214141', parentId: 1 },
      { id: 5, name: 'Павел', phone: '8921143535', parentId: 4 },
    ],
    sortedItems: null,
  },
  mutations: {
    sortItems(state, { type, field }) {
      switch (type) {
        case 'asc':
          if (field === 'name') {
            state.sortedItems = state.items.sort((a, b) => a.name.localeCompare(b.name));
          } else if (field === 'phone') {
            state.sortedItems = state.items.sort((a, b) => Number(a.phone) - Number(b.phone));
          }
          break;
        case 'dsc':
          if (field === 'name') {
            state.sortedItems = state.items.sort((a, b) => b.name.localeCompare(a.name));
          } else if (field === 'phone') {
            state.sortedItems = state.items.sort((a, b) => Number(b.phone) - Number(a.phone));
          }
          break;
        default:
          state.sortedItems = null;
      }
    },
    setContacts(state, contacts) {
      state.items = contacts;
    },
    setSortedContacts(state, contacts) {
      state.sortedItems = contacts;
    },
    addToContacts(state, newContact) {
      state.items = [...state.items, newContact];
    },
  },
  getters: {
    parents(state) {
      if (state.sortedItems) return state.sortedItems.filter((item) => !item.parentId);
      return state.items.filter((item) => !item.parentId);
    },
    newId(state) {
      const ids = state.items.map((item) => item.id).sort();
      return ids[ids.length - 1] + 1;
    },
  },
};
