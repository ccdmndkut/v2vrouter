<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn
        flat
        to="/"
        active-class
      >
        <span class="mr-2">home</span>
      </v-btn>
          <v-btn
        to="/user/bill"
        active-class
      >
        <span class="mr-2">bill</span>
      </v-btn>
  </div>
</template>

<script>
export default {

  name: "About",

};
</script>
