<template>
  <div class="sticky top-0 z-50 bg-slate-50">
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
            @click="navbar = !navbar"
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
            v-show="profiledata.Admin && !login"
            href="#"
            class="text-sm font-semibold leading-6 text-gray-900"
            @click="$router.replace('/Admin')"
            >Admin</a
          >

          <a
            href="#"
            class="text-sm font-semibold leading-6 text-gray-900"
            @click="$router.replace('/History')"
            >History</a
          >
        </div>
        <div
          class="hidden lg:flex lg:flex-1 lg:justify-end text-sm font-semibold leading-6 text-gray-900"
        >
          <div class="px-10" @click="$router.replace('/Profile')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <div v-if="login" class="" @click="$router.replace('/login')">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
              >Log in <span aria-hidden="true">&rarr;</span></a
            >
          </div>
          <button v-else class="" @click="popup = true">
            <a href="#" class=""
              >Logout<span aria-hidden="true">&rarr;</span></a
            >
          </button>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div role="dialog" aria-modal="true" v-if="navbar">
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
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="navbar = !navbar"
            >
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
                  @click="$router.replace('/'), (navbar = !navbar)"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >Home</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  @click="$router.replace('/Bookingpage'), (navbar = !navbar)"
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
                  >Beg</a
                >
              </div>
              <div
                v-if="login"
                class="py-6"
                @click="$router.replace('/login'), (navbar = !navbar)"
              >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >Log in</a
                >
              </div>
              <div
                v-else
                class="py-6"
                @click="(navbar = !navbar), (popup = true)"
              >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >Logout</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LogOut v-show="popup" @add="popup = false"></LogOut>
  </div>
</template>
<script>
import LogOut from "./LogOut.vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../plugin/index";

export default {
  components: {
    LogOut,
  },
  data() {
    return {
      login: true,
      uid: "",
      profiledata: false,
      popup: false,
      navbar: false,
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
