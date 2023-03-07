<template>
  <div>
    <Slidebar />
    <div
      class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
      id="main-content"
    >
      <div class="px-10 pt-10">
        <div class="text-2xl mb-10 flex">
          <div
            class="bg-white px-10 py-5 rounded-xl shadow-xl hover:shadow-emerald-700 font-black"
          >
            {{ returnDate() }}
          </div>
        </div>
        <div class="grid grid-cols-3 gap-14">
          <div class="">
            <div class="bg-white px-10 py-5 rounded-xl shadow-xl font-black">
              <div class="text-xl">จำนวนคนที่จองทั้งหมด</div>
              <div class="text-2xl text-center py-10 text-emerald-900">
                {{ TotleUesr }}
              </div>
            </div>
          </div>
          <div class="">
            <div class="bg-white px-10 py-5 rounded-xl shadow-xl font-black">
              <div class="text-xl">จำนวนแอดมิน</div>
              <div class="text-2xl text-center py-10 text-emerald-900">
                {{ TotleAdmin }}
              </div>
            </div>
          </div>
          <div class="">
            <div class="bg-white px-10 py-5 rounded-xl shadow-xl font-black">
              <div class="text-xl">จำนวนผู้ใช้ทั้งหมด</div>
              <div class="text-2xl text-center py-10 text-emerald-900">
                {{ UesrTotle }}
              </div>
            </div>
          </div>
          <div class="">
            <div class="bg-white px-10 py-5 rounded-xl shadow-xl font-black">
              <div class="text-xl">จำนวนห้องทั้งหมด</div>
              <div class="text-2xl text-center py-10 text-emerald-900">
                {{ TotleRoom }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slidebar from "../components/Slidebar.vue";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../plugin/index";

export default {
  components: { Slidebar },
  data() {
    return {
      TotleUesr: "Loading...",
      UesrTotle: "Loading...",
      TotleAdmin: "Loading...",
      TotleRoom: "Loading...",
    };
  },
  mounted() {
    this.readTotleUesr();
    this.readUesrTotle();
    this.readAdminTotle();
    this.readRoomTotle();
  },
  methods: {
    readTotleUesr() {
      const unsub = onSnapshot(doc(db, "Admin", "TotleBooking"), (doc) => {
        this.TotleUesr = doc.data().TotleBooking;
      });
    },
    readUesrTotle() {
      const unsub = onSnapshot(doc(db, "Admin", "UesrTotle"), (doc) => {
        this.UesrTotle = doc.data().UesrTotle;
      });
    },
    readAdminTotle() {
      const unsub = onSnapshot(doc(db, "Admin", "TotleAdmin"), (doc) => {
        this.TotleAdmin = doc.data().TotleAdmin;
      });
    },
    readRoomTotle() {
      const unsub = onSnapshot(doc(db, "Admin", "TotleRoom"), (doc) => {
        this.TotleRoom = doc.data().TotleRoom;
      });
    },
    returnDate() {
      const date = new Date(); // current date and time

      const options = {
        weekday: "long", // full day name (e.g. "วันเสาร์")
        year: "numeric", // year (e.g. "2566")
        month: "long", // full month name (e.g. "มกราคม")
        day: "numeric", // day of the month (e.g. "6")
        timeZone: "Asia/Bangkok", // specify timezone (optional)
        localeMatcher: "best fit", // locale matching algorithm (optional)
      };

      const thaiDate = date.toLocaleDateString("th-TH", options);
      this.datetext = thaiDate;
      return thaiDate;
    },
  },
};
</script>
<style></style>
