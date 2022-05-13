<template>
  <v-container>
    <v-row>

      <v-col
        cols="12"
        sm="6"
      >
        <v-text-field
          type="text"
          v-model="search"
          @keyup.enter="callData"
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        sm="2"
      >
        <v-btn
          color="blue-grey"
          class="ma-2 white--text"
          @click="callData"
        >검색</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="8"
      >
        <v-card
          elevation="2"
          outlined
          shaped
          tile
          v-for="(item, index) in list"
          :key="index"
          style="margin:5px"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div
              align="left"
              @click="onClickRedirect(item.url)"
            >
              <v-card-title
                class="text-h5"
                v-html="item.title"
              ></v-card-title>
              <v-card-subtitle v-html="item.contents"></v-card-subtitle>
            </div>
            <v-avatar
              class="ma-3"
              size="100"
              tile
            >
              <v-img :src="item.thumbnail"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
  <!-- </div> -->
</template>

<script>
import axios from "axios";

export default {

  data: () => ({
    search: 'vue.js',

    list: []
  }),

  methods: {
    callData () {
      axios.get(`https://dapi.kakao.com/v2/search/blog?query=${this.search}`, {      //axios의 결과가  promise이다
        headers: {
          //Authorization: `KakaoAK ${REST_API_KEY}`
          Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}` //.env.local에서 가져옴 이름이 VUE_APP_으로 시작해야 함.
        }
      }).then(response => {
        console.log(response)
        this.list = response.data.documents;
      }).catch(error => {
        console.error(error)
      })
    },

    onClickRedirect: function (url) {
      window.open(url, "_blank");
    }
  }
}
</script>

<style scoped>
</style>