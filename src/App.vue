<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <router-link to="/about">
          <span
            id="nav"
            class="font-weight-light"
          >MATERIAL DESIGN</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="/"
        active-class
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    next();
  },
  name: "App",
  data() {
    return {
      //
    };
  },
  methods: {
    mdcbutton() {
      console.log("button leave");
      event.currentTarget.blur();
    }
  }
};
</script>
<style lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>