<template>
  <div class="bg-white dark:bg-gray-600">
    <div class="h-screen bg-white dark:bg-gray-600">
      <div class="py-6"></div>
      <div
        wire:loading
        v-show="!show"
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
      >
        <svg
          role="status"
          class="mr-2 w-36 h-36 text-gray-200 animate-spin fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
        <p class="w-1/3 text-center text-white">
          This may take a few seconds, please don't close this page.
        </p>
      </div>

      <div class="p-8 rounded-md w-full bg-white dark:bg-gray-600">
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      <div class="flex items-center">#</div>
                    </th>
                    <th
                      class="px py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Total
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Total Price
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in producttable" :key="index">
                    <td
                      class="md:px-5 sm:px-5 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                    >
                      <input
                        id="checkbox-all"
                        v-model="checkbox[index].checkbox"
                        @click="varbox = false"
                        type="checkbox"
                        class="w-5 h-5 mx-5 md:mx-0 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-800 dark:border-gray-600"
                      />
                    </td>
                    <td
                      class="py-5 border-b border-gray-200 bg-white dark:border-gray-900 dark:bg-gray-700 text-sm"
                    >
                      <div class="ml-3">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              :src="item.img"
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p
                              class="text-gray-900 whitespace-no-wrap dark:text-white"
                            >
                              {{ item.data.title }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td
                      class="md:px-5 sm:px-2 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                    >
                      <p
                        class="text-gray-900 whitespace-no-wrap dark:text-white"
                      >
                        {{ item.data.price }} $
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                    >
                      <p
                        class="text-gray-900 whitespace-no-wrap dark:text-white"
                      >
                        {{ item.count }}
                      </p>
                    </td>
                    <td
                      class="md:px-5 sm:px-2 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                    >
                      <p
                        class="text-gray-900 whitespace-no-wrap dark:text-white"
                      >
                        {{ (item.data.price * item.count).toFixed(2) }} $
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                    >
                      <button
                        type="button"
                        @click="
                          (logoutvar = true),
                            (cartid = item.index),
                            (cartindex = index),
                            (count = cart.Product[item.index].total)
                        "
                        class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg py-2 px-5 text-xs dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="px-5 py-4 bg-white dark:border-gray-900 dark:bg-gray-700 border-t flex flex-col xs:flex-row items-center xs:justify-between"
              >
                <div class="inline-flex mt-2 xs:mt-0">
                  <button
                    class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                    v-if="this.producttable.length != 0"
                    @click="summoney(), (open = true)"
                  >
                    BUY
                  </button>
                  <button
                    class="text-sm text-indigo-50 transition duration-150 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                    v-else
                    disabled
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="open = false"
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
              <div
                class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700"
              >
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    >
                    </DialogTitle>
                    <div class="mt-2">
                      <h1 class="text-2xl text-gray-900 dark:text-white">
                        Confirm Buy
                      </h1>
                      <h1 class="text-2xl text-gray-900 dark:text-white">
                        Totle : {{ totalmoney.toFixed(2) }} $
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-700"
              >
                <button
                  type="submit"
                  @click="(open = false), buy()"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Buy
                </button>
                <button
                  type="button"
                  @click="open = false"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
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
              <div
                class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700"
              >
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    >
                    </DialogTitle>
                    <div class="mt-2">
                      <div class="text-gray-900 dark:text-white">
                        <div>
                          <h1 class="">
                            {{ producttable[cartindex].data.title }}
                          </h1>
                          <h1
                            class="text-red-600 mt-2 font-bold md:pr-10"
                            v-if="cart.Product[cartid].total == 0"
                          >
                            The product will be automatically deleted when the
                            item equals 0.
                          </h1>
                          <div class="flex md:px-36 md:pt-14 sm:pt-5 sm:px-5">
                            <button
                              type="button"
                              @click="
                                cart.Product[cartid].total <= 0
                                  ? cart.Product[cartid].total == 0
                                  : cart.Product[cartid].total--
                              "
                              class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-caret-left-fill"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
                                />
                              </svg>
                            </button>
                            <p
                              class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-2"
                            >
                              {{ cart.Product[cartid].total }}
                            </p>

                            <button
                              type="button"
                              @click="cart.Product[cartid].total++"
                              class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-caret-right-fill"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-700"
              >
                <button
                  type="submit"
                  @click="profile(), (logoutvar = false)"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Submit
                </button>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="
                    (logoutvar = false), (cart.Product[cartid].total = count)
                  "
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../plugin/index.js";
import { collection, getDocs, setDoc } from "firebase/firestore";
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  async mounted() {
    this.readdataincart();
    const querySnapshot = await getDocs(collection(db, "product"));
    querySnapshot.forEach((doc) => {
      this.profiledata.push({ id: doc.id, data: doc.data() });
    });
    this.addProducttoTable();
    this.show = true;
    const user = auth.currentUser;
    onSnapshot(doc(db, "bag", user.uid), (doc) => {
      this.bag = doc.data();
    });
  },

  data() {
    return {
      cart: [],
      show: false,
      profiledata: [],
      producttable: [],
      logoutvar: false,
      cartid: "",
      cartindex: "",
      count: 0,
      checkbox: [],
      varbox: false,
      totalmoney: 0,
      open: false,
      totalBuy: [],
      bag: [],
    };
  },
  methods: {
    readdataincart() {
      const user = auth.currentUser;
      onSnapshot(doc(db, "cart", user.uid), (doc) => {
        this.cart = doc.data();
      });
    },
    addProducttoTable() {
      this.profiledata.forEach((data) => {
        for (let index = 0; index < this.cart.Product.length; index++) {
          if (this.cart.Product[index].idproduct == data.id) {
            this.producttable.push({
              data: data.data.data,
              img: data.data.linkfile,
              count: this.cart.Product[index].total,
              index: index,
            });
            this.checkbox.push({
              idproduct: this.cart.Product[index].idproduct,
              checkbox: false,
            });
            break;
          }
        }
      });
    },
    async profile() {
      for (let index = 0; index < this.cart.Product.length; index++) {
        if (this.cart.Product[index].total == 0) {
          this.cart.Product.splice(index, 1);
        }
      }
      const user = auth.currentUser;
      const citiesRef = collection(db, "cart");
      await setDoc(doc(citiesRef, user.uid), {
        UID: user.uid,
        Product: this.cart.Product,
      });
      this.producttable = [];
      this.addProducttoTable();
    },
    addcheckboxall() {
      this.checkbox.forEach((element) => {
        element.checkbox = !this.varbox;
      });
    },
    summoney() {
      if (this.producttable.length != 0) {
        this.totalmoney = 0;
        this.totalBuy = [];
        for (let index = 0; index < this.checkbox.length; index++) {
          if (this.checkbox[index].checkbox) {
            this.totalmoney +=
              this.producttable[index].data.price *
              this.producttable[index].count;
            this.totalBuy.push({
              idproduct:
                this.cart.Product[this.producttable[index].index].idproduct,
              total: this.producttable[index].count,
            });
          }
        }
      }
    },
    async buy() {
      if (this.totalBuy.length != 0) {
        this.show = false;
        if (this.bag.Product.length != 0) {
          for (let index = 0; index < this.totalBuy.length; index++) {
            let x = true;
            for (let j = 0; j < this.bag.Product.length; j++) {
              if (
                this.totalBuy[index].idproduct == this.bag.Product[j].idproduct
              ) {
                this.bag.Product[j].total += this.totalBuy[index].total;
                x = false;
              }
            }

            if (x) {
              this.bag.Product.push(this.totalBuy[index]);
            }
          }
        } else {
          this.bag.Product = this.totalBuy;
        }
        const user = auth.currentUser;

        for (let index = 0; index < this.cart.Product.length; index++) {
          for (let i = 0; i < this.totalBuy.length; i++) {
            if (
              this.totalBuy[i].idproduct == this.cart.Product[index].idproduct
            ) {
              this.cart.Product.splice(index, 1);
            }
          }
        }
        const citiesRef1 = collection(db, "cart");
        await setDoc(doc(citiesRef1, user.uid), {
          UID: user.uid,
          Product: this.cart.Product,
        });
        this.producttable = [];
        this.addProducttoTable();
        const citiesRef = collection(db, "bag");
        await setDoc(doc(citiesRef, user.uid), {
          UID: user.uid,
          Product: this.bag.Product,
        });

        this.show = true;
        this.varbox = false;
      }
    },
  },
};
</script>

<style></style>
