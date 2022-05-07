<template>
  <div id="app">
    <!-- <MonitorView></MonitorView><br>
    <ControllerView></ControllerView> -->
    <!-- <InputView></InputView> -->

    <!-- If using vue-router -->
    <router-view></router-view>
    <br>
    <router-link to="/info">Info</router-link> &nbsp;
    <router-link to="/">Home</router-link>

  </div>

</template>

<script>
//import { defineComponent } from '@vue/composition-api'
// import ControllerView from '@/views/ControllerView.vue'
// import MonitorView from '@/views/MonitorView.vue'
// import InputView from '@/views/InputView.vue'

export default ({
  components: {
    // ControllerView,
    // MonitorView,
    // InputView
  }

})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
