<template>
  <LoadingScreen v-show="Loading" />
  <div>
    <button @click="ReadDetil()">asdsad</button>
    <!-- {{ time }}{{ aaa[0].Time.Time1.Booking == null }} -->
    <div class="grid grid-cols-4 gap-2">
      <div
        v-for="item in aaa"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          {{ item.Time.Time1.Time }}
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
              <a
                v-if="item.Time.Time1.Booking == null"
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ item.Time.Time1.Time }}
              </a>
              <p
                v-else
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ item.Time.Time1.Time }}
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ item.Time.Time2.Time }}
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ item.Time.Time3.Time }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      Loading: true,
      timeDate: [],
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
      const month = now.getMonth();
      const day = now.getDate() + 1;
      this.time = year + "/" + month + "/" + day;
    },
    async test() {
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
      this.Loading = false;
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
  },
};
</script>
<style></style>
