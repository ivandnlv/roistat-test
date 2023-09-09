<template>
  <div class="table__row table-item">
    <div class="table__row-item" v-if="!isChild">
      <button v-if="tableItem.children" @click="changeAllChildrenVisible">hide</button>
      {{ tableItem.name }}
    </div>
    <div
      class="table__row-item"
      v-else-if="isChild && isShowAllChildren"
      :style="`padding-left: ${padding}px`"
    >
      <button v-if="tableItem.children" @click="changeAllChildrenVisible">hide</button>
      {{ tableItem.name }}
    </div>
    <div class="table__row-item">{{ tableItem.phone }}</div>

    <div v-if="tableItem.children && isShowAllChildren">
      <div class="table__row" v-for="(child, i) in tableItem.children" :key="i">
        <table-item :tableItem="child" isChild :padding="padding ? padding + 10 : 30" />
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
      require: true,
    },
    isChild: {
      type: Boolean,
      require: false,
    },
    padding: {
      type: Number,
      require: false,
    },
  },
  data: () => ({
    isShowAllChildren: true,
  }),
  methods: {
    changeAllChildrenVisible() {
      this.isShowAllChildren = !this.isShowAllChildren;
    },
  },
};
</script>

<style lang="scss" scoped>
.table__row-item {
  &.child {
    padding-left: 30px;
  }
}
</style>
