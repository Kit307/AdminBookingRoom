<template>
  <Slidebar />
  <!-- {{ readDataCount() }} -->
  <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" id="main-content">
    <!-- <button @click="AddBookingCount()">add + 1</button> -->
    <div>{{ countBooking }}</div>
    <div class="grid grid-cols-4 gap-2">
      <div
        v-for="(item, index) in aaa"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" :src="item.Img_Url" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ item.NameRoom }} <span>({{ item.Numbersit }})</span>
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.Location }}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ item.Details }}
          </p>
          <router-link :to="'/admin/RoomDetel/' + item.IdRoom">
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              See more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg> </a
          ></router-link>
        </div>
      </div>
    </div>
    <LoadingScreen v-show="Loading" /> <router-view />
  </div>
</template>
<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../plugin/index";
// import { collection,  } from "firebase/firestore";
import LoadingScreen from "../components/LoadingScreen.vue";
import Slidebar from "../components/Slidebar.vue";
import { doc, onSnapshot } from "firebase/firestore";
import { setDoc } from "firebase/firestore";

export default {
  components: {
    LoadingScreen,
    Slidebar,
  },
  data() {
    return {
      aaa: [],
      Loading: true,
      countBooking: 0,
    };
  },
  mounted() {
    this.test();
    this.readDataCount();
  },
  methods: {
    async test() {
      const querySnapshot = await getDocs(collection(db, "Room"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.aaa.push(doc.data());
        // console.log(doc.data());
      });
      this.Loading = false;
    },
    readDataCount() {
      const unsub = onSnapshot(doc(db, "Admin", "TotleBooking"), (doc) => {
        this.countBooking = doc.data().TotleBooking;
      });
    },
    async AddBookingCount() {
      await setDoc(doc(db, "Admin", "TotleBooking"), {
        TotleBooking: (this.countBooking += 1),
      });
    },
  },
};
</script>
<style></style>
