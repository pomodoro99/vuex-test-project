<template>
  <v-app-bar-title>
    <div style="width:200px">{{titleText}}</div>
  </v-app-bar-title>
  <!-- <div>{{titleText}}</div> -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    //...mapGetters('page',['title', 'visible'])
    ...mapGetters(['titleText']),
  }
};
</script>