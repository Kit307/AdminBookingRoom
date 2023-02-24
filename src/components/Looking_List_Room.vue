<template>
  <div><button @click="test()">sdad</button></div>
</template>
<script>
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      test: "",
    };
  },
  methods: {
    async test() {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>
<style></style>
