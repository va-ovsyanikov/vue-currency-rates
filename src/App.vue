<template>
  <div class="app">

      <div class="app__top">
        <h1>Currency rates</h1>
      </div>
      <div class="app__content" border>
        <v-table> </v-table>
     </div>

  </div>
</template>

<script>
import vTable from "./components/v-table.vue";
export default {
  name: "App",
  components: {
    vTable
  },
};
</script>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app {
  max-width: 1200px;
  margin: 0 auto;
  h1 {
    color: #f1f1f1;
    text-align: center;
  }
}
.app__top {
  background: #001529;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
