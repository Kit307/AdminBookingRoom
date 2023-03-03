<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navber from "./components/Navbar.vue";
</script>

<template>
  <Navber />
  <div class="z-10">
    <router-view />
  </div>
</template>
<style>
* {
  font-family: "Noto Sans Thai", sans-serif;
}
</style>
