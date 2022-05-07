<template>
  <div class="home">
    <MonitorView></MonitorView><br>
    <ControllerView></ControllerView>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ControllerView from '@/views/ControllerView.vue'
import MonitorView from '@/views/MonitorView.vue'

export default {
  name: 'HomeView',
  components: {
    //HelloWorld,
    ControllerView,
    MonitorView,
  }
}
</script>
