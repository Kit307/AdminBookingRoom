<script setup>
import { RouterView } from "vue-router";
import Navber from "./components/Navbar.vue";
</script>

<template :class="isDark ? 'dark' : ''">
  <Navber class="" />
  <div class="z-10">
    <router-view />
  </div>
</template>
<style>
* {
  font-family: "Noto Sans Thai", sans-serif;
}
</style>
<script>
export default {
  data() {
    return {
      isDark: false,
    };
  },
};
</script>
