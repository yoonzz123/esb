<template>
  <v-app>
    <v-app-bar :elevation="2" rounded scroll-behavior="inverted">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer app v-model="drawer">
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item
        >x

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
            to="/home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="Test"
            value="test"
            to="/test"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="VexFlow"
            value="/vexFlow"
            to="/vexFlow"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.v-app-bar {
  background-color: #cfd8dc;
}
</style>
