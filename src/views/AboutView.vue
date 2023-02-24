<template>
  <div class="about">
    <div>
      <input type="file" @change="onFileSelete" />
      <button @click="upload()">upload</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seleteFile: null,
    };
  },
  methods: {
    onFileSelete(even) {
      this.seleteFile = even.target.files[0];
      console.log(this.seleteFile);
    },
    upload(){

    },
    log() {
      console.log("asdsa");
    },
  },
};
</script>
