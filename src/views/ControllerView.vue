<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="1"
      ></v-col>
      <v-col
        cols="12"
        sm="5"
      >
        <v-text-field
          type="number"
          v-model="num1"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="5"
      >
        <v-text-field
          type="number"
          v-model="num2"
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- <button @click="increase(1)">증가</button>
    <button @click="decrease(-1)">감소</button> -->
    <v-row>
      <v-col cols="12">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          @click="calculate('+')"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          @click="calculate('-')"
        >
          <v-icon dark>mdi-minus</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          @click="calculate('*')"
        >
          <v-icon dark>mdi-close</v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          @click="calculate('/')"
        >
          <v-icon dark>mdi-division</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
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