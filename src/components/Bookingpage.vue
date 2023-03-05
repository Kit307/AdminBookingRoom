<template>
  <LoadingScreen v-show="Loading" />
  <form @submit.prevent="test11">
    <input
      v-model="date"
      name="trip-start"
      required
      :min="timestart"
      :max="maxDate"
      type="date"
    />
    <button type="submit">asd</button>
  </form>
  <div class="bg-slate-50 h-screen" v-if="product">
    <button @click="ReadDetil()">asdsad</button>
    {{ timestart }}
    <!-- {{ time }}{{ aaa[0].Time.Time1.Booking == null }} -->
    <div class="grid grid-cols-4 gap-2">
      <div
        v-for="item in aaa"
        class="max-w-sm bg-white border shadow-2xl border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
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
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.Details.Location }}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.Details.Details }}
          </p>
          <div class="flex">
            <div>
              <router-link
                :to="'/Bookingpage/' + item.Details.IdRoom"
                sss="asdasd"
                @click="product = !product"
                v-if="item.Time.Time1.Booking == null"
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ item.Time.Time1.Time }}
              </router-link>
              <p
                v-else
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ item.Time.Time1.Time }}
              </p>
              <router-link
                :to="'/Bookingpage/' + item.Details.IdRoom"
                sss="asdasd"
                @click="product = !product"
                v-if="item.Time.Time2.Booking == null"
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ item.Time.Time2.Time }}
              </router-link>
              <p
                v-else
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ item.Time.Time2.Time }}
              </p>
              <router-link
                :to="'/Bookingpage/' + item.Details.IdRoom"
                sss="asdasd"
                @click="product = !product"
                v-if="item.Time.Time3.Booking == null"
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ item.Time.Time3.Time }}
              </router-link>
              <p
                v-else
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ item.Time.Time3.Time }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view
    v-else
    :sss="aaa"
    @clase="(product = !product), test()"
    :key="$route.path"
  />
</template>
<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../plugin/index";
import { doc, onSnapshot } from "firebase/firestore";
import LoadingScreen from "../components/LoadingScreen.vue";
export default {
  components: {
    LoadingScreen,
  },
  data() {
    return {
      aaa: [],
      time: "",
      timestart: "2023-03-05", // set to the current date
      maxDate: "2023-03-30",
      Loading: true,
      timeDate: [],
      product: true,
      date: null,
    };
  },
  mounted() {
    this.getTime();
    this.test();
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
      const querySnapshot = await getDocs(collection(db, "Room"));
      querySnapshot.forEach(async (doc) => {
        // await this.ReadDetil(doc.data().IdRoom),
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
          // console.log();
        }
        // console.log(this.aaa);
      }
      // this.Loading = false;
    },
    async ReadDetil() {
      this.Loading = true;

      const querySnapshot = await getDocs(
        collection(db, "/RoomDetail/2023-2/27")
      );
      querySnapshot.forEach(async (doc) => {
        this.timeDate.push({
          Time: doc.data(),
        });
      });

      this.Loading = false;
    },
    test11() {
      console.log(this.date);
    },
  },
};
</script>
<style></style>
