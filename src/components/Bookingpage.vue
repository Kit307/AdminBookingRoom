<template>
  <div v-if="dateinput">
    <div class="h-screen flex justify-center items-center bg-slate-200">
      <div
        class="w-96 h-60 bg-white flex justify-center items-center rounded-3xl shadow-2xl"
      >
        <div>
          <h1 class="font-black pb-5 text-center">
            เลือกวันที่จะต้องการจองห้องประชุม
          </h1>
          <form
            @submit.prevent="
              test(), (product = true), (dateinput = false), (Loading = true)
            "
            class="flex gap-x-5"
          >
            <VueDatePicker
              v-model="datezaza"
              format="dd/MM/yyyy"
              :minDate="timestart"
              :maxDate="maxDate"
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
  </div>
  <div v-else>
    <div class="bg-slate-50 pb-56" v-if="product">
      <!-- {{ time }}{{ aaa[0].Time.Time1.Booking == false }} -->
      <div
        class="font-black text-xl py-10 flex items-center justify-center gap-5"
      >
        <div>{{ returnDate() }}</div>
        <button
          @click="test11()"
          class="bg-emerald-300 px-5 rounded-lg shadow-lg"
        >
          เลือกวันใหม่
        </button>
      </div>
      <div class="grid grid-cols-4 gap-y-10 px-16">
        <div v-for="item in aaa">
          <div
            v-if="item.Details.show"
            class="max-w-sm bg-white border shadow-2xl border-gray-200 rounded-lg pb-10 dark:bg-gray-800 dark:border-gray-700 relative"
          >
            <a href="#">
              <img
                class="rounded-t-lg h-64 w-full object-cover"
                :src="item.Details.Img_Url"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ item.Details.NameRoom }}
                  <span>({{ item.Details.Numbersit }})</span>
                </h5>
              </a>
              <div class="text-red-50">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt-fill inline-block"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                      />
                    </svg>
                  </span>
                  {{ item.Details.Location }}
                </p>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ edittext(item.Details.Details) }}
              </p>
              <div class="">
                <div class="absolute bottom-2 tracking-[2px]">
                  <router-link
                    :to="'/Bookingpage/' + item.Details.IdRoom"
                    sss="asdasd"
                    @click="
                      (product = !product), (productdetail = !productdetail)
                    "
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >ดูเพิ่มเติมและจอง
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view
      v-if="productdetail"
      :sss="aaa"
      :date="datetext"
      @clase="(product = true), (productdetail = false), test()"
      :key="$route.path"
    />
  </div>
  <LoadingScreen v-show="Loading" />
</template>
<script>
import Datepic from "./Datepic.vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../plugin/index";
import { setDoc, onSnapshot, doc } from "firebase/firestore";
import LoadingScreen from "../components/LoadingScreen.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  components: {
    Datepic,
    LoadingScreen,
    VueDatePicker,
  },
  data() {
    return {
      aaa: [],
      time: "",
      timestart: "2023-03-05", // set to the current date
      maxDate: "2023-03-30",
      Loading: false,
      timeDate: [],
      product: true,
      productdetail: false,
      date: "",
      dateinput: true,
      timesasa: "",
      datezaza: "",
      datetext: "",
      countBooking: 0,
    };
  },
  mounted() {
    this.getstartdate();
  },
  methods: {
    getTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      this.time = year + "/" + month + "/" + day;
      this.timestart = `${year}-0${month}-${day}`;
      const maxDate = new Date(year, month - 1, day + 10);
      const maxYear = maxDate.getFullYear();
      const maxMonth = maxDate.getMonth() + 1;
      const maxDay = maxDate.getDate();
      this.maxDate = `${maxYear}-0${maxMonth}-${maxDay}`;
    },
    async test() {
      this.aaa = [];
      this.seletedate = false;
      this.product = true;
      const querySnapshot = await getDocs(collection(db, "Room"));
      querySnapshot.forEach(async (doc) => {
        this.aaa.push({
          Details: doc.data(),
        });
      });

      await this.ReadDetil();
      for (let index = 0; index < this.aaa.length; index++) {
        for (let j = 0; j < this.timeDate.length; j++) {
          if (
            this.aaa[index].Details.IdRoom == this.timeDate[j].Time.Time1.IdRoom
          ) {
            this.aaa[index] = {
              Details: this.aaa[index].Details,
              Time: this.timeDate[j].Time,
            };
          }
        }
      }
    },
    async ReadDetil() {
      this.Loading = true;
      let now = new Date(this.datezaza);
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      let time = `/RoomDetail/${year}-${month}/${day}`;
      const querySnapshot = await getDocs(collection(db, time));
      querySnapshot.forEach(async (doc) => {
        this.timeDate.push({
          Time: doc.data(),
        });
      });

      this.Loading = false;
    },
    test11() {
      this.dateinput = true;
      this.product = false;
    },
    returnDate() {
      const date = new Date(this.datezaza); // current date and time

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
    edittext(text) {
      if (text.length > 100) {
        text = text.substring(0, 100) + " ...";
      }
      this.getstartdate();
      return text;
    },
    getstartdate() {
      const date = new Date();
      const yyyyMMdd = date.toISOString().slice(0, 10);
      // console.log(yyyyMMdd); // prints "2023-03-06"
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      this.time = year + "/" + month + "/" + day;
      this.timestart = date.toISOString().slice(0, 10);
      const maxDate = new Date(year, month - 1, day + 10);

      this.maxDate = maxDate.toISOString().slice(0, 10);
    },
  },
};
</script>
<style></style>
