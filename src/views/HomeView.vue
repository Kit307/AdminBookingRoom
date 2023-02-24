<template>
  <div>
    <button @click="test()">sdad</button>
    <div>{{ aaa }}</div>
  </div>
</template>
<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../plugin/index";
// import { collection,  } from "firebase/firestore";

export default {
  data() {
    return {
      aaa: [],
    };
  },
  methods: {
    async test() {
      const querySnapshot = await getDocs(collection(db, "Room"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.aaa.push(doc.data());
      });
    },
  },
};
</script>
<style></style>
