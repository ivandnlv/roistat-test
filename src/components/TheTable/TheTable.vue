<template>
  <div class="table">
    <div class="table__head">
      <div class="table__row">
        <div class="table__row-item table__head-item">Имя</div>
        <div class="table__row-item table__head-item">Номер</div>
      </div>
    </div>
    <div class="table__body">
      <table-item v-for="item in tableState.table" :key="item.id" :table-item="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TableItem from '@/components/TheTable/TableItem.vue';
export default {
  components: {
    TableItem,
  },
  computed: {
    ...mapState({
      tableState: 'table',
    }),
  },
};
</script>

<style lang="scss">
$border: 1px solid #ccc;

.table {
  border-collapse: collapse;
  border: $border;
  &__row {
    display: flex;
    width: 400px;
    flex-wrap: wrap;
    &-item {
      padding: 10px;
      min-width: 200px;
      border: $border;
    }
  }
  &__head {
    &-item {
      font-weight: 600;
    }
  }
}
</style>
