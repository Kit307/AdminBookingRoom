<template>
  <div class="z-50">
    <div class="px-6 pt-6 lg:px-8 z-50">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            class="text-sm font-semibold leading-6 text-gray-900"
            @click="$router.replace('/')"
            >Home</a
          >

          <a
            href="#"
            class="text-sm font-semibold leading-6 text-gray-900"
            @click="$router.replace('/Bookingpage')"
            >Booking</a
          >

          <a
            v-show="profiledata.Admin"
            href="#"
            class="text-sm font-semibold leading-6 text-gray-900"
            @click="$router.replace('/Admin')"
            >Admin</a
          >

          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Company</a
          >
        </div>
        <div
          v-if="login"
          class="hidden lg:flex lg:flex-1 lg:justify-end"
          @click="$router.replace('/login')"
        >
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
        </div>
        <button
          v-else
          class="hidden lg:flex lg:flex-1 lg:justify-end"
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
        >
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Logout<span aria-hidden="true">&rarr;</span></a
          >
        </button>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div role="dialog" aria-modal="true">
        <div
          focus="true"
          class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <!-- Nav bar md -->
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  href="#"
                  @click="$router.replace('/')"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >Home</a
                >

                <a
                  href="#"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  @click="$router.replace('/Bookingpage')"
                  >Booking</a
                >

                <a
                  href="#"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >Marketplace</a
                >

                <a
                  href="#"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >Company</a
                >
              </div>
              <div class="py-6" @click="$router.replace('/login')">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="popup-modal"
      tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <svg
              aria-hidden="true"
              class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              Logout ?????
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              @click="logout()"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../plugin/index";
import Logout from "../components/LogOut.vue";
export default {
  components: {
    Logout,
  },
  data() {
    return {
      login: true,
      uid: "",
      profiledata: false,
    };
  },
  mounted() {
    this.chackLogin();
  },
  methods: {
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
          console.log();
          this.readData();
          // ...แสดงผล user, email, id ในจอ
        } else {
          // User is signed out
          // ...กรณีที่ยังไม่ได้ login ให้เปลียนไปหน้า login ก่อน !!!
          this.login = true;
        }
      });
    },
    logout() {
      //   const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-outsuccessful.
          //   this.$router.push("/");
          this.$router.replace("/login");
          // console.log("dsaasd");
          this.logoutvar = false;
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
    readData() {
      const user = auth.currentUser;
      onSnapshot(doc(db, "Profile", user.uid), (doc) => {
        // console.log(doc.data());
        this.profiledata = doc.data();
      });
    },
  },
};
</script>
<style></style>
