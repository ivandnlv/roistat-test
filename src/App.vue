<template>
  <div id="app">
    <h1>Hello</h1>
    <TheTable />
  </div>
</template>

<script>
import TheTable from '@/components/TheTable/TheTable.vue';

export default {
  name: 'App',
  components: {
    TheTable,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
