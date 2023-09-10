<template>
  <div class="overlay" @click="(e) => onOverlayClick(e)">
    <div class="modal">
      <form class="modal__form">
        <label class="modal__form-item">
          Имя
          <input type="text" placeholder="Введите имя..." v-model="name" />
        </label>
        <label class="modal__form-item">
          Телефон
          <input type="text" placeholder="Введите номер телефона..." v-model="phone" />
        </label>
        <label class="modal__form-item">
          Начальник
          <select v-model="parent">
            <option value=""></option>
            <option v-for="item in tableWithoutNesting" :key="item.id" :value="item.id">
              {{ item.name }}
            </option>
          </select>
        </label>
        <the-btn :on-click="(e) => sendForm(e)">Сохранить</the-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import TheBtn from '../UI/TheBtn.vue';
export default {
  components: {
    TheBtn,
  },
  computed: {
    ...mapGetters(['newId', 'tableWithoutNesting']),
  },
  methods: {
    ...mapMutations(['changeModalVisibility', 'addToTable']),
    sendForm(e) {
      e.preventDefault();

      const child = {
        id: this.newId,
        name: this.name,
        phone: this.phone,
      };

      console.log({ id: Number(this.parent), tableItem: child });

      this.addToTable({ id: Number(this.parent), tableItem: child });

      this.closeModal();
    },
    closeModal() {
      this.changeModalVisibility(false);
    },
    onOverlayClick(e) {
      if (e.target.classList.contains('overlay')) {
        this.closeModal();
      }
    },
  },
  data: () => ({
    name: '',
    phone: '',
    parent: '',
  }),
};
</script>

<style lang="scss" scoped>
label {
  display: flex;
  width: 100%;
  gap: 20px;
}
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.modal {
  margin: 0 auto;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
