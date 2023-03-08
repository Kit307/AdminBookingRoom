<template>
  <Slidebar></Slidebar>

  <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen">
    <div
      class="relative min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-700 py-12 px-4 sm:px-6 lg:px-8"
    >
      <!-- bg-yellow-100 -->
      <!-- <div class="absolute bg-black opacity-60 inset-0 z-0"></div> -->
      <div class="mt-2 items-center">
        <form @submit.prevent="Allmember()">
          <div
            class="md:py-8 py-14 bg-white max-w-sm px-10 mx-auto rounded-xl shadow-xl dark:bg-gray-800 dark:rounded-xl dark:shadow-xl overflow-hidden space-y-10"
          >
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                >Enter Email to add admin</label
              >
              <input
                class="w-full px-5 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="email"
                v-model="email"
                required
              />
              <p v-show="emailnofile" class="text-red-600 font-bold mt-2">
                Can't find this email
              </p>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add admin
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div>
    <TransitionRoot as="template" :show="logoutvar">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="logoutvar = false"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <form @submit.prevent="Editdata()">
                <div
                  class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700"
                >
                  <div class="">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                        >Add Admin
                      </DialogTitle>
                      <div class="mt-2">
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium md:mt-0 text-gray-900 dark:text-white text-left"
                          >Name</label
                        >

                        <input
                          class="w-full px-3 mb-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          disabled
                          :value="this.member[index].data.name"
                        />
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium md:mt-0 text-gray-900 dark:text-white text-left"
                          >Email</label
                        >

                        <input
                          :value="email"
                          class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          disabled
                        />

                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium md:mt-0 text-gray-900 dark:text-white text-left"
                          >Status</label
                        >
                        <select
                          v-model="admin"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        >
                          <option value="" disabled selected>
                            Select your results
                          </option>
                          <option>Admin</option>
                          <option>Member</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-700"
                >
                  <button
                    type="submit"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="logoutvar = false"
                    ref="cancelButtonRef"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import Slidebar from "./Slidebar.vue";
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { auth, db } from "../plugin/index.js";

import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
export default {
  components: {
    Slidebar,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  async beforeCreate() {
    const querySnapshot = await getDocs(collection(db, "Profile"));
    querySnapshot.forEach((doc) => {
      this.member.push({ id: doc.id, data: doc.data() });
    });
    const user = auth.currentUser;
    onSnapshot(doc(db, "Profile", user.uid), (doc) => {
      this.admin1 = doc.data();
    });
  },
  data() {
    return {
      email: "",
      member: [],
      emailnofile: false,
      logoutvar: false,
      index: "",
      admin: "",
      admin1: "",
      TotleAdmin: 0,
    };
  },
  mounted() {
    this.readTotleAdmin();
  },
  methods: {
    Allmember() {
      let x = false;
      for (let index = 0; index < this.member.length; index++) {
        if (this.member[index].data.Email == this.email) {
          x = true;
          this.emailnofile = false;
          this.logoutvar = true;
          this.index = index;
          break;
        }
      }
      if (!x) {
        this.emailnofile = true;
      }
    },
    readTotleAdmin() {
      const unsub = onSnapshot(doc(db, "Admin", "TotleAdmin"), (doc) => {
        this.TotleAdmin = doc.data().TotleAdmin;
      });
    },
    async AddBookingCount() {
      await setDoc(doc(db, "Admin", "TotleAdmin"), {
        TotleAdmin: (this.TotleAdmin += 1),
      });
    },
    async DeleteBookingCount() {
      await setDoc(doc(db, "Admin", "TotleAdmin"), {
        TotleAdmin: (this.TotleAdmin -= 1),
      });
    },
    async Editdata() {
      const citiesRef = collection(db, "Profile");
      let member = false;
      if (this.admin == "Admin") {
        if (!this.member[this.index].data.Admin) {
          this.AddBookingCount();
        }
        member = true;
      } else {
        if (this.member[this.index].data.Admin) {
          this.DeleteBookingCount();
        }
        member = false;
      }
      this.member[this.index].data.Admin = member;
      await setDoc(doc(citiesRef, this.member[this.index].id), {
        name:
          this.member[this.index].data.fname +
          "  " +
          this.member[this.index].data.lname,
        fname: this.member[this.index].data.fname,
        lname: this.member[this.index].data.lname,
        Admin: this.member[this.index].data.Admin,
        Phone: this.member[this.index].data.Phone,
        UID: this.member[this.index].data.UID,
        Email: this.member[this.index].data.Email,
        totalMoney: this.member[this.index].data.totalMoney,
      });
      if (!this.admin1.Admin) {
        this.$router.replace("/");
      }
      this.$router.replace("/admin");
      this.logoutvar = false;
    },
  },
};
</script>

<style></style>
