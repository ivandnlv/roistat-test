<template>
  <div class="table__row table-item">
    <div class="table__row-item" :style="`padding-left: ${padding}px`">
      <button v-if="isHaveChildren" @click="onBtnClick" class="table__btn">
        {{ children && children.length ? '-' : '+' }}
      </button>
      {{ contact.name }}
    </div>
    <div class="table__row-item">{{ contact.phone }}</div>
    <div v-if="children && children.length">
      <table-item
        v-for="contact in children"
        :padding="padding ? padding + 20 : 20"
        :contact="contact"
        :key="contact.id"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'table-item',
  props: {
    contact: {
      type: Object,
      required: true,
    },
    padding: {
      type: Number,
      required: false,
    },
  },
  data: () => ({
    isHaveChildren: false,
    children: null,
  }),
  computed: {
    ...mapState(['contacts']),
  },
  methods: {
    getChildren() {
      let children = null;
      if (this.contacts.sortedItems) {
        children = this.contacts.sortedItems.filter(
          (contact) => contact?.parentId === this.contact.id,
        );
      } else {
        children = this.contacts.items.filter((contact) => contact?.parentId === this.contact.id);
      }

      if (children.length) {
        this.isHaveChildren = true;
      }
      return children;
    },
    onBtnClick() {
      if (this.children && this.children.length) {
        this.children = null;
      } else {
        this.children = this.getChildren();
      }
    },
  },
  created() {
    this.children = this.getChildren();
  },
  watch: {
    'contacts.items': {
      handler() {
        this.children = this.getChildren();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.table__btn {
  cursor: pointer;
  font-size: 1em;
  background: none;
  border: none;
}
</style>
