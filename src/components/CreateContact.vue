<template>
  <form class="form">
    <header class="form__header">
      <button @click="(e) => onModalClose(e)">X</button>
    </header>
    <label :class="name.error ? `form__item _error` : `form__item`">
      <span>Имя</span>
      <input type="text" placeholder="Введите имя..." v-model="name.value" @input="resetErrors" />
      <p v-if="name.error" class="error">{{ name.error }}</p>
    </label>
    <label :class="phone.error ? `form__item _error` : `form__item`">
      <span>Телефон</span>
      <input
        type="number"
        placeholder="Введите номер телефона..."
        v-model="phone.value"
        @input="resetErrors"
      />
      <p v-if="phone.error" class="error">{{ phone.error }}</p>
    </label>
    <label class="form__item">
      <span>Начальник</span>
      <select v-model="parentId.value">
        <option value="">Выберите начальника</option>
        <option v-for="item in contacts.items" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </label>
    <the-btn :on-click="(e) => sendForm(e)">Сохранить</the-btn>
  </form>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import TheBtn from '@/components/TheBtn.vue';
export default {
  components: {
    TheBtn,
  },
  props: {
    closeModal: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['newId']),
    ...mapState(['contacts']),
    isNameValid() {
      return !!this.name.value && !!this.name.value.length;
    },
    isPhoneValid() {
      return !!this.phone.value && !!this.phone.value.length;
    },
  },
  methods: {
    ...mapMutations(['changeModalVisibility', 'addToContacts']),
    resetErrors() {
      this.name.error = null;
      this.phone.error = null;
    },
    sendForm(e) {
      e.preventDefault();

      if (!this.isNameValid) {
        this.name.error = 'Обязательное поле';
        return;
      }

      if (!this.isPhoneValid) {
        this.phone.error = 'Обязательно поле';
        return;
      }

      if (this.parentId.value) {
        this.addToContacts({
          id: this.newId,
          name: this.name.value,
          phone: this.phone.value,
          parentId: this.parentId.value,
        });
      } else {
        this.addToContacts({
          id: this.newId,
          name: this.name.value,
          phone: this.phone.value,
        });
      }

      this.closeModal();
    },
    onModalClose(e) {
      e.preventDefault();

      this.closeModal();
    },
  },
  data: () => ({
    name: {
      value: null,
      error: null,
    },
    phone: {
      value: null,
      error: null,
    },
    parentId: {
      value: null,
      error: null,
    },
  }),
};
</script>

<style lang="scss" scoped>
.error {
  margin-top: 5px;
  color: red;
}
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &__header {
    position: absolute;
    top: -5px;
    right: 20px;
    button {
      cursor: pointer;
      border: none;
      background: none;
      font-weight: 700;
    }
  }
  button {
    margin-top: 0;
  }
  &__item {
    display: block;
    width: 100%;
    label,
    input,
    select {
      display: block;
    }
    input,
    select {
      margin-top: 10px;
      padding: 15px 30px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 1em;
      width: 100%;
    }
    &._error {
      input {
        border: 1px solid red;
        color: red;
      }
    }
  }
}
</style>
