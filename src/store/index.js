import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/Auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    //data 영역, 전역데이터, 유지보수 차원에서 데이터 넘기는 좋은 방법은 아님
    title: 'test',
    count: 0,
    result: 0    //사칙연산 결과
  },
  getters: {  //computed 영역
    titleText (state) {
      return state.title
    },

    nameText (state) {
      return state.name;
    },

    cnt (state) {
      return state.count;
    },

    displayResult (state) {
      return state.result;
    }
  },
  mutations: {  //method 영역, 동기 데이터 관리, 로직 변경시 (data 가져올때 commit사용)
    changeCount (state, num) {
      state.count += num;
    },

    result (state, num) {   //전달인자가 1개 이상일 때 오류가 나서 배열로 받음
      let tmp = 0;
      let num1 = parseInt(num[0])
      let num2 = parseInt(num[1])
      let cal = num[2]

      switch (cal) {
        case "+":
          tmp = num1 + num2;
          break;
        case "-":
          tmp = num1 - num2;
          break;
        case "*":
          tmp = num1 * num2;
          break;
        case "/":
          if (num2 == 0)
            tmp = "계산불가"
          else
            tmp = num1 / num2;
          break;
      }
      state.result = tmp
    }

    // setTitle (state, text) {
    //   this.title = text;
    // },

    // setName (state, text) {
    //   state.name = text
    // }
  },
  actions: {    //비즈니스로직 담당, 비동기 데이터 관리 setTimeout()같은... (data 가져올때 dispatch사용)
    changeCount (context, num) {
      context.commit('changeCount', num)
    }

  },
  modules: {
    Auth
    //'Auth' : Auth
  }
})
