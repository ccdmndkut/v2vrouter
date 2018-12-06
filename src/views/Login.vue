<template>
  <div class="login">
    <login></login>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  beforeRouteLeave(to, from, next) {
    next();
  },
  name: "Login",
  components: {
    Login
  }
};
</script>


