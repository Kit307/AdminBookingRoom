<template>
  <div class="overflow-hidden bg-emerald-900/20">
    <div class="lg:flex items-center justify-center xl:px-48 px-11 h-screen">
      <div>
        <h1 class="text-4xl text-center font-black pb-10 pt-20">
          ชีวิตลงตัวที่
          <span class="text-purple-500" style="font-family: 'Pacifico', cursive"
            >MRR</span
          >
        </h1>
        <div class="text-2xl xl:text-right leading-10 text-center">
          เลือกวัน เวลา และห้องประชุมเพื่อวางแผนการทำงาน
          <br class="hidden md:block" />
          ที่เหมาะสมกับคุณและทีมของคุณ <br />
          เพราะวางแผนดีมีชัยไปกว่าครึ่ง งานสำคัญไว้ใจเรา MRR
        </div>
        <div class="flex pt-10 lg:text-2xl md:text-xl justify-center">
          <button
            @click="$router.replace('/Bookingpage')"
            class="px-11 rounded-lg shadow-xl border-4 border-teal-600 bg-teal-300 py-3 hover:-translate-y-2 transition ease-in-out duration-300 delay-75 hover:scale-110"
          >
            เริ่มต้น
          </button>
          <button
            class="ml-10 px-11 rounded-lg border border-slate-400 bg-slate-200 py-3"
          >
            เพิ่มเติม
          </button>
        </div>
      </div>

      <div class="">
        <img
          src="../assets/Home.png"
          alt=""
          srcset=""
          class="lg:w-[650px] xl:w-[1000px] hidden md:block lg:translate-y-0 md:-translate-y-10"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
