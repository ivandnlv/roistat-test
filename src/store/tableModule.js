export default {
  state: {
    table: [
      {
        id: 1,
        name: 'Вася',
        phone: '+792132141',
      },
      {
        id: 2,
        name: 'Вася',
        phone: '+7324234234',
        children: [
          {
            id: 3,
            name: 'Галя',
            phone: '+7324234234',
            children: [
              {
                id: 4,
                name: 'Петя',
                phone: '+790324234',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'Прохор',
        phone: '+7322325',
      },
    ],
    isModalOpen: false,
  },
  mutations: {
    addToTable(state, { id, tableItem }) {
      console.log(id, tableItem);
      if (Number(id)) {
        state.table = state.table.map((item) => {
          if (item.id === id) {
            if (item.children) {
              item.children.push(item);
            } else {
              item.children = [tableItem];
            }
          }
        });
      } else {
        state.table = [...state.table, tableItem];
      }
    },
    changeModalVisibility(state, value) {
      state.isModalOpen = value;
    },
  },
  getters: {
    newId(state) {
      let allObjArr = [];

      function openObjects(obj) {
        if (obj.children) {
          allObjArr.push({ id: obj.id, name: obj.name, phone: obj.phone });
          obj.children.forEach((item) => openObjects(item));
        } else {
          allObjArr.push({ id: obj.id, name: obj.name, phone: obj.phone });
        }
      }

      state.table.forEach((obj) => openObjects(obj));
      const ids = allObjArr.map((item) => item.id).sort();

      return ids[ids.length - 1] + 1;
    },
    tableWithoutNesting(state) {
      let allObjArr = [];

      function openObjects(obj) {
        if (obj.children) {
          allObjArr.push({ id: obj.id, name: obj.name, phone: obj.phone });
          obj.children.forEach((item) => openObjects(item));
        } else {
          allObjArr.push({ id: obj.id, name: obj.name, phone: obj.phone });
        }
      }

      state.table.forEach((obj) => openObjects(obj));

      return allObjArr;
    },
  },
};
