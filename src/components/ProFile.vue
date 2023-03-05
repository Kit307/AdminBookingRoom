<template>
  <div class="bg-gray-50 dark:bg-gray-700">
    <div class="h-screen bg-gray-50 dark:bg-gray-700 py-24">
      <!-- Container -->
      <div class="container mx-auto bg-gray-50 dark:bg-gray-700">
        <div class="flex justify-center px-6">
          <!-- Row -->
          <div
            class="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl rounded-lg border border-gray-300 dark:border-none"
          >
            <!-- Col -->
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style="
                background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
              "
            ></div>
            <!-- Col -->
            <div
              class="w-full lg:w-7/12 bg-white dark:text-white dark:bg-gray-800 p-5 rounded-lg lg:rounded-l-none"
            >
              <h3 class="pt-4 text-2xl text-center">Your Profile account</h3>
              <div
                class="px-8 pt-6 pb-8 mb-4 bg-white rounded dark:bg-gray-800 dark:rounded-xl dark:shadow-xl"
              >
                <div class="mb-2">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <div class="flex">
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        :value="profiledata.fname"
                      />
                      <button
                        type="button"
                        @click="popupsetting('fname')"
                        class="text-red-700 hover:text-white border text-sm leading-tight border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 text-center mx-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      Last Name
                    </label>
                    <div class="flex">
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        :value="profiledata.lname"
                      />
                      <button
                        type="button"
                        @click="popupsetting('lname')"
                        class="text-red-700 hover:text-white border text-sm leading-tight border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 text-center mx-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      Phone
                    </label>
                    <div class="flex">
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        :value="profiledata.Phone"
                      />
                      <button
                        type="button"
                        @click="popupsetting('phone')"
                        class="text-red-700 hover:text-white border text-sm leading-tight border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 text-center mx-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mb-4">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      Email
                    </label>
                    <div class="flex mb-2">
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        :value="profiledata.Email"
                      />
                      <!-- <button
                        type="button"
                        class="text-red-700 hover:text-white border text-sm leading-tight border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 text-center mx-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Edit
                      </button> -->
                    </div>
                  </div>
                </div>

                <hr class="border-t my-10" />
                <div class="flex justify-center">
                  <button
                    type="submit"
                    v-show="btnEdit"
                    @click="profile"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit Edit
                  </button>
                  <button
                    type="reset"
                    v-show="btnEdit"
                    @click="(profiledata = profiledata1), (btnEdit = false)"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form v-if="logoutvar" @submit.prevent="editdata(popuptext[1])">
      <div class="relative flex justify-center items-center">
        <div
          id="menu"
          @click="$emit('add', Math.random())"
          class="w-full h-full bg-gray-600 bg-opacity-80 top-0 fixed sticky-0"
        >
          <div
            class="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center"
          >
            <div
              class="w-96 md:w-auto relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36 rounded-3xl"
            >
              <div role="banner">
                <img src="../assets/data-transfer.png" alt="" class="h-32" />
              </div>
              <div class="mt-12">
                <h1
                  role="main"
                  class="text-2xl lg:text-xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
                >
                  {{ popuptext[0] }}
                </h1>
              </div>
              <div class="flex">
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  disabled
                  :value="popuptext[1]"
                />
                <p class="text-sm px-3 py-2 text-gray-500 dark:text-white">
                  To
                </p>
                <input
                  v-if="phonenum"
                  v-model="input"
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  maxlength="10"
                  minlength="10"
                />
                <input
                  v-model="input"
                  v-else
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div class="mt"></div>
              <button
                type="submit"
                class="w-full sm:w-auto mt-14 text-lg leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black"
              >
                แน่นอน
              </button>

              <button
                class="text-gray-800 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                aria-label="close"
                @click="logoutvar = !logoutvar"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- <div class="text-white">{{ profiledata }}</div> -->
  </div>
  <LoadingScreen v-show="Loading" />
</template>

<script>
import LoadingScreen from "./LoadingScreen.vue";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../plugin/index.js";

export default {
  components: { LoadingScreen },
  mounted() {
    this.readData();
  },
  data() {
    return {
      profiledata: "",
      logoutvar: false,
      popuptext: [],
      phonenum: false,
      input: "",
      btnEdit: false,
      profiledata1: "",
      Loading: true,
    };
  },
  mounted() {
    this.chackLogin();
  },
  methods: {
    async profile() {
      this.Loading = true;
      const user = auth.currentUser;
      const citiesRef = collection(db, "Profile");
      await setDoc(doc(citiesRef, user.uid), {
        name: this.profiledata.fname + "  " + this.profiledata.lname,
        fname: this.profiledata.fname,
        lname: this.profiledata.lname,
        Admin: this.profiledata.Admin,
        Phone: this.profiledata.Phone,
        UID: user.uid,
        Email: user.email,
        totalMoney: this.profiledata.totalMoney,
      });
      this.btnEdit = false;
      this.Loading = false;
    },
    readData() {
      const user = auth.currentUser;
      onSnapshot(doc(db, "Profile", user.uid), (doc) => {
        this.profiledata = doc.data();
        this.profiledata1 = doc.data();
      });
      this.Loading = false;
    },
    formatnumber(number) {
      return new Intl.NumberFormat().format(number);
    },
    popupsetting(i) {
      this.logoutvar = true;
      switch (i) {
        case "fname":
          this.popuptext = ["Edit First Name ?", this.profiledata.fname];
          this.phonenum = false;
          break;
        case "lname":
          this.popuptext = ["Edit Last Name ?", this.profiledata.lname];
          this.phonenum = false;
          break;
        case "phone":
          this.popuptext = ["Edit Phone Number ?", this.profiledata.Phone];
          this.phonenum = true;
          break;
        default:
          break;
      }
    },
    editdata(i) {
      // console.log(i, this.input);
      if (this.profiledata.fname == i) {
        this.profiledata.fname = this.input;
        this.input = "";
      }
      if (this.profiledata.lname == i) {
        this.profiledata.lname = this.input;
        this.input = "";
      }
      if (this.profiledata.Phone == i) {
        this.profiledata.Phone = this.input;
        this.input = "";
      }
      this.logoutvar = false;
      this.btnEdit = true;
    },
    chackLogin() {
      // const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // console.log(uid);
          this.uid = uid;
          this.login = false;

          this.readData();
        } else {
          this.$router.replace("/login");
        }
      });
    },
  },
};
</script>

<style></style>
