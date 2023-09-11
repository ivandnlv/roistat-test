<template>
  <div class="table">
    <div class="table__head">
      <div class="table__row">
        <div class="table__row-item table__head-item" @click="onFieldClick('name')">
          Имя
          <img
            v-if="sort !== 'default' && field === 'name'"
            src="/icons/sort-icon.svg"
            :alt="sort"
            :class="sort === 'asc' ? 'sort' : 'sort dsc'"
          />
        </div>
        <div class="table__row-item table__head-item" @click="onFieldClick('phone')">
          Номер
          <img
            v-if="sort !== 'default' && field === 'phone'"
            src="/icons/sort-icon.svg"
            :alt="sort"
            :class="sort === 'asc' ? 'sort' : 'sort dsc'"
          />
        </div>
      </div>
    </div>
    <div class="table__body" v-if="!contacts.sortedItems">
      <table-item
        v-for="item in contacts.items.filter((item) => !item.parentId)"
        :key="item.id"
        :contact="item"
      />
    </div>
    <div class="table__body" v-else>
      <table-item
        v-for="item in contacts.sortedItems.filter((item) => !item.parentId)"
        :key="item.id"
        :contact="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import TableItem from '@/components/TheTable/TableItem.vue';
export default {
  components: {
    TableItem,
  },
  computed: {
    ...mapState(['contacts']),
    ...mapGetters(['parents']),
  },
  methods: {
    ...mapMutations(['sortItems']),
    onFieldClick(field) {
      this.field = field;
      switch (this.sort) {
        case 'asc':
          this.sort = 'dsc';
          this.sortItems({ type: this.sort, field });
          break;
        case 'dsc':
          this.sort = 'default';
          this.sortItems({ type: this.sort, field });
          break;
        default:
          this.sort = 'asc';
          this.sortItems({ type: this.sort, field });
          break;
      }
    },
  },
  data: () => ({
    sort: 'default',
    field: 'default',
  }),
};
</script>

<style lang="scss">
$border: 1px solid #ccc;

.table {
  border-collapse: collapse;
  border: $border;
  &__row {
    display: flex;
    width: 600px;
    flex-wrap: wrap;
    &-item {
      padding: 10px;
      width: 50%;
      border: $border;
      overflow-x: auto;
    }
  }
  &__head {
    &-item {
      font-weight: 600;
      .sort {
        width: 10px;
        height: 10px;
        transition: transform 0.2s ease-in-out;
        &.dsc {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
