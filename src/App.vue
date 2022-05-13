<template>
  <v-app>
    <v-navigation-drawer app>
      <v-card
        class="mx-auto"
        max-width="300"
        tile
      >
        <v-list dense>
          <v-subheader>VUE 과제</v-subheader>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
            >
              <!-- vuetify v-list-item의 to 속성 사용해서 routing 처리-->

              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar app>
      <!-- -->
      <HeaderView />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
      <router-link to="/about">About</router-link> &nbsp;
      <router-link to="/">Home</router-link>
    </v-footer>
  </v-app>

</template>

<script>
//import { defineComponent } from '@vue/composition-api'
// import ControllerView from '@/views/ControllerView.vue'
// import MonitorView from '@/views/MonitorView.vue'
// import InputView from '@/views/InputView.vue'
import HeaderView from '@/views/layout/HeaderView.vue'

export default ({
  components: {
    // ControllerView,
    // MonitorView,
    // InputView
    HeaderView
  },
  data: () => ({
    selectedItem: 0,
    items: [
      { text: 'Home', icon: 'mdi-home', to: '/' },
      { text: 'About', icon: 'mdi-account', to: '/info' },
      { text: 'Blog검색', icon: 'mdi-search-web', to: '/axios' },
    ],
  }),

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
