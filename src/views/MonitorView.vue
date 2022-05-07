<template>
  <div>
    <!-- <span>카운터 : {{$store.getters.cnt}}</span> -->
    <!-- <span>카운터 : {{cnt}}</span>
    <span>카운터 state: {{count}}</span><br>
    <span>이름 : {{name}}</span> -->
    <span>계산결과 : {{displayResult}}</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {

  computed: {
    // ...mapState(['count']),     //좋지 않은 방법
    // ...mapGetters(['cnt']),
    // ...mapGetters('Auth', ['name']),
    ...mapGetters(['cnt']),
    ...mapGetters(['displayResult']),
  }
}
</script>