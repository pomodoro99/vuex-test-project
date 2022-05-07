<template>
  <div>이름을 입력하세요 :
    <input
      type="text"
      @input="inputName"
    >
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions('Auth', ['setName']),

    inputName (event) {
      this.setName(event.target.value)
    }
  }
}
</script>