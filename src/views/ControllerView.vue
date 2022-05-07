<template>
  <div>
    <input
      type="number"
      v-model="num1"
    >&nbsp;
    <input
      type="number"
      v-model="num2"
    >
    <!-- <button @click="increase(1)">증가</button>
    <button @click="decrease(-1)">감소</button> -->
    <br><br>
    <button @click="calculate('+')">+</button>
    <button @click="calculate('-')">-</button>
    <button @click="calculate('*')">*</button>
    <button @click="calculate('/')">/</button>

  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex"

export default {
  data: function () {
    return {
      num1: 0,
      num2: 0,
      num: []
    }
  },
  methods: {
    // ...mapActions(['changeCount']),
    ...mapMutations(['changeCount']),
    ...mapMutations(['result']),

    increase (number) {
      //this.$store.commit('changeCount', number)
      //   this.$store.dispatch('changeCount', number)
      this.changeCount(number)
    },

    decrease (number) {
      //   this.$store.dispatch('changeCount', number)
      this.changeCount(number)
    },

    calculate (cal) {
      this.num.splice(0, this.num.length);    //배열값 초기화

      this.num.push(this.num1)
      this.num.push(this.num2)

      switch (cal) {
        case "+":
          this.num.push("+")
          break;
        case "-":
          this.num.push("-")
          break;
        case "*":
          this.num.push("*")
          break;
        case "/":
          this.num.push("/")
          break;
      }

      this.result(this.num)

    }
  }
}

</script>