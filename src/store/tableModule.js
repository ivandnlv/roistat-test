export default {
  state: {
    table: [
      {
        name: 'Вася',
        phone: '+792132141',
      },
      {
        name: 'Вася',
        phone: '+7324234234',
        children: [
          {
            name: 'Галя',
            phone: '+7324234234',
            children: [
              {
                name: 'Петя',
                phone: '+790324234',
              },
            ],
          },
        ],
      },
      {
        name: 'Прохор',
        phone: '+7322325',
      },
    ],
    isModal: false,
  },
  mutations: {
    addToTable(state, tableItem) {
      if (state.table) {
        state.table.push(tableItem);
      } else {
        state.table = [tableItem];
      }
    },
  },
};
