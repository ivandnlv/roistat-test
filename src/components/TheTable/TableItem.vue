<template>
  <div class="table__row table-item">
    <div class="table__row-item" :style="padding ? `padding-left: ${padding}px` : ''">
      <button class="table__btn" v-if="tableItem.children" @click="toggleChildrenVisible">+</button>
      {{ tableItem.name }}
    </div>
    <div class="table__row-item">{{ tableItem.phone }}</div>

    <div v-if="tableItem.children && isShowAllChildren">
      <div class="table__row" v-for="child in tableItem.children" :key="child.id">
        <table-item
          :tableItem="child"
          isChild
          :padding="
            child.children && padding
              ? padding + 10
              : !child.children && padding
              ? padding + 20
              : 20
          "
          @toggle-children="toggleChildren"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'table-item',
  props: {
    tableItem: {
      type: Object,
      required: true,
    },
    isChild: {
      type: Boolean,
      required: false,
    },
    padding: {
      type: Number,
      required: false,
    },
  },
  data: () => ({
    isShowAllChildren: true,
  }),
  methods: {
    toggleChildrenVisible() {
      this.isShowAllChildren = !this.isShowAllChildren;
    },
    toggleChildren() {
      this.isShowAllChildren = !this.isShowAllChildren;
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
