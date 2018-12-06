<template>
  <div class="user">
    <div>User {{ $route.params.id }}</div>
    <v-btn
      to="/user/tom"
      active-class
    >
      <span class="mr-2">tom</span>
    </v-btn>
  </div>
</template>

<script>
export default {

  name: "user",
  data() {
    return {
      //
    };
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log("to: ", Object.values(to));
    }
  },
  methods: {}
};
</script>