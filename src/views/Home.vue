<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  beforeRouteLeave(to, from, next) {
    next({ name: 'Login' })
  },
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>


