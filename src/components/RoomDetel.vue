<template>
  <div>asdasdsadsd {{ RoomId }}</div>
  <button @click="BackToDetle()">Back</button>
</template>
<script>
export default {
  props: ["sss"],
  data() {
    return {
      RoomId: this.$route.params.id,
    };
  },
  methods: {
    BackToDetle() {
      this.$router.replace("/");
    },
  },
};
</script>
<style></style>
