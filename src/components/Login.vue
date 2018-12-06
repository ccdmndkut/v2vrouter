<template>
  <v-container>
    <div>login</div>
  </v-container>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    next();
  },
  name: "Login",
  computed: {
    username() {}
  },
  methods: {},
  data: () => ({})
};
</script>

<style>
</style>
