export default {

    namespaced: true,       //modules의 이름을 쓰겠다

    state: {    //data 영역, 전역데이터, 유지보수 차원에서 데이터 넘기는 좋은 방법은 아님
        text: ''
    },
    getters: {  //computed 영역
        name (state) {
            return state.text
        }
    },
    mutations: {  //method 영역
        setName (state, name) {
            state.text = name;
        }
    },
    actions: {      //비동기데이터 영역
        setName ({ commit }, name) {        //context.commit대신 context의 commit을 바로 사용 가능, 첫번째 인자는 디폴트
            commit('setName', name)
        }

    },
}