<template>
  <div class="h-screen flex justify-center items-center bg-slate-200">
    <div
      class="w-96 h-60 bg-white flex justify-center items-center rounded-3xl shadow-2xl"
    >
      <div>
        <h1 class="font-black pb-5 text-center">
          เลือกวันที่จะต้องการจองห้องประชุม
        </h1>
        <form @submit.prevent="submit1()" class="flex gap-x-5">
          <VueDatePicker
            v-model="datezaza"
            format="dd/MM/yyyy"
            minDate="2023-3-1"
            maxDate="2023-3-9"
            required
          />
          <button
            type="submit"
            class="bg-emerald-400 px-4 rounded-lg font-black"
          >
            ยืนยัน
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { VueDatePicker },

  data() {
    return {
      datezaza: "",
    };
  },
  methods: {
    submit1() {
      this.$emit("datapit", this.datezaza);
    },
  },
  mounted() {
    this.datezaza = "";
  },
};
</script>
