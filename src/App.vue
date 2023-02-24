<script setup>
import { RouterLink, RouterView } from "vue-router";
import Slidebar from "./components/Slidebar.vue";
</script>

<template>
  <Slidebar />
  <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" id="main-content">
    <RouterLink to="/" class="">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    <div class="p-6 bg-gray-100 mb-20">
      <router-view />
    </div>
  </div>
  <!-- <header>
    <div class="z-50">
      <nav>
        
      </nav>
    </div>
  </header> -->
  <!-- <RouterView /> -->
</template>
