<template>
  <Slidebar />
  <!-- {{ readDataCount() }} -->
  <div class="h-screen bg-slate-50 flex justify-center items-center">
    <div class="overflow-x-auto">
      <div class="relative md:shadow-2xl sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">#</th>
              <th scope="col" class="px-6 py-3">ชื่อห้อง</th>
              <th scope="col" class="px-6 py-3">ที่อยู่</th>
              <th scope="col" class="px-6 py-3">รายละเอียด</th>

              <th scope="col" class="px-6 py-3">จำนวนที่นั่ง</th>
              <th scope="col" class="px-6 py-3">Action</th>
              <th scope="col" class="px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in aaa">
            <tr
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              v-if="index >= (x - 1) * 5 && index < x * 5 && item.show"
            >
              <td class="md:px-6 md:py-4">
                <img
                  :src="item.Img_Url"
                  class="w-14 h-14 object-cover rounded-lg"
                  alt=""
                />
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ item.NameRoom }}
              </th>

              <td class="px-6 py-4">
                {{ edittext(item.Location, 10) }}
              </td>
              <td class="px-6 py-4">
                {{ edittext(item.Details, 20) }}
              </td>
              <td class="px-6 py-4">
                {{ item.Numbersit }}
              </td>
              <td class="px-6 py-4">
                <a
                  @click="(iofClick = index), (popup = true)"
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >Edit</a
                >
              </td>
              <td class="px-6 py-4">
                <button
                  class="text-red-500"
                  @click="(deletepopup = true), (iofClick = index)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="px-5 py-4 md:bg-white dark:border-gray-900 dark:bg-gray-700 border-t flex flex-col xs:flex-row items-center xs:justify-between"
        >
          <div class="inline-flex mt-2 xs:mt-0">
            <button
              @click="x == 1 ? (x = 1) : x--"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Prev
            </button>
            <div
              class="text-white bg-gradient-to-r from-pink-500 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {{ x }}
            </div>
            <button
              class="text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              @click="aaa.length / 5 - 1 < x - 1 ? x : x++"
            >
              Next
            </button>
          </div>
        </div>
        <div>
          <TransitionRoot as="template" :show="deletepopup">
            <Dialog
              as="div"
              class="fixed z-10 inset-0 overflow-y-auto"
              @close="deletepopup = false"
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
                        <div
                          class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                        >
                          <DialogTitle
                            as="h3"
                            class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                          >
                            ต้องการลบห้องประชุมจริงไหม ?
                          </DialogTitle>
                          <div class="mt-2">
                            <p class="text-sm text-gray-500 dark:text-white">
                              Are you sure you want to deactivate your account?
                              All of your data will be permanently removed. This
                              action cannot be undone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-700"
                    >
                      <button
                        type="button"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        @click="deleteRoom()"
                      >
                        ยีนยัน
                      </button>
                      <button
                        type="button"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        @click="deletepopup = false"
                        ref="cancelButtonRef"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </div>
                </TransitionChild>
              </div>
            </Dialog>
          </TransitionRoot>
        </div>
      </div>
    </div>
  </div>

  <div>
    <TransitionRoot as="template" :show="popup">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="popup = false"
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
              <form @submit.prevent="editdata">
                <div
                  class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700"
                >
                  <div class="">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                      >
                        Product Details
                      </DialogTitle>
                      <div class="mt-2">
                        <div class="px-6">
                          <div class="flex justify-center items-center">
                            <img
                              :src="aaa[iofClick].Img_Url"
                              alt=""
                              class="w-52 h-52 object-cover mx-auto"
                            />
                            <div>
                              <button
                                @click="
                                  (popup2 = true),
                                    (popup = false),
                                    (editdata = 0)
                                "
                                class="underline text-red-600 font-black mx-auto"
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                          <div>
                            <div class="flex justify-between pt-5">
                              <div class="pb-2">ชื่อห้อง</div>
                              <button
                                class="underline text-red-600 font-black"
                                @click="
                                  (popup2 = true),
                                    (popup = false),
                                    (editdata = 1)
                                "
                              >
                                Edit
                              </button>
                            </div>
                            <div>{{ aaa[iofClick].NameRoom }}</div>
                          </div>
                          <div>
                            <div class="flex justify-between pt-5">
                              <div class="">ที่อยู่</div>
                              <button
                                class="underline text-red-600 font-black"
                                @click="
                                  (popup2 = true),
                                    (popup = false),
                                    (editdata = 2)
                                "
                              >
                                Edit
                              </button>
                            </div>
                            <div>{{ aaa[iofClick].Location }}</div>
                          </div>
                          <div>
                            <div class="flex justify-between pt-5">
                              <div class="pb-2">จำนวนที่นั่ง</div>
                              <button
                                class="underline text-red-600 font-black"
                                @click="
                                  (popup2 = true),
                                    (popup = false),
                                    (editdata = 3)
                                "
                              >
                                Edit
                              </button>
                            </div>
                            <div>{{ aaa[iofClick].Numbersit }}</div>
                          </div>
                          <div>
                            <div class="flex justify-between pt-5">
                              <div class="pb-2">รายละเอียด</div>
                              <button
                                class="underline text-red-600 font-black"
                                @click="
                                  (popup2 = true),
                                    (popup = false),
                                    (editdata = 4)
                                "
                              >
                                Edit
                              </button>
                            </div>
                            <div>{{ aaa[iofClick].Details }}</div>
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
                    type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="popup = false"
                    ref="cancelButtonRef"
                  >
                    ยกเลิก
                  </button>
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </Dialog> </TransitionRoot
    ><TransitionRoot as="template" :show="popup2">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="popup2 = false"
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
              <form @submit.prevent="uploadEdit()">
                <div
                  class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700"
                >
                  <div class="">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                      >
                        Product Details
                      </DialogTitle>
                      <div class="mt-2">
                        <div>Text</div>
                        <input
                          v-if="editdata == 1 || editdata == 2"
                          type="text"
                          v-model="textinput"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 pl-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        /><input
                          v-if="editdata == 3"
                          v-model="textinput"
                          type="number"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 pl-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        <label class="block bg-slate-50">
                          <span class="sr-only">Choose File</span>
                          <input
                            v-if="editdata == 0"
                            required
                            type="file"
                            @change="onFileSelete"
                            class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:text-blue-800 hover:file:bg-blue-100"
                          />
                        </label>
                        <textarea
                          rows="4"
                          v-model="textinput"
                          required
                          v-if="editdata == 4"
                          name="message"
                          placeholder="รายละเอียดห้อง"
                          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
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
                    ยืนยัน
                  </button>
                  <button
                    type="button"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="popup2 = false"
                    ref="cancelButtonRef"
                  >
                    ยกเลิก
                  </button>
                </div>
              </form>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
  <LoadingScreen v-show="Loading" /> <router-view />
</template>
<script>
import LoadingScreen from "../components/LoadingScreen.vue";
import Slidebar from "../components/Slidebar.vue";
import { ref } from "firebase/storage";
import { storage, db } from "../plugin/index";
import { collection, setDoc, doc, onSnapshot } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
export default {
  components: {
    LoadingScreen,
    Slidebar,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  data() {
    return {
      aaa: [],
      Loading: true,
      countBooking: 0,
      x: 1,
      iofClick: 0,
      popup: false,
      popup2: false,
      editdata: 0,
      NameRoom: null,
      Details: null,
      Numbersit: null,
      Location: null,
      seleteFile: null,
      progress: 0,
      aaa: [],
      Loading: false,
      TotleRoom: 0,
      textinput: "",
      deletepopup: false,
      TotleRoom: 0,
    };
  },
  mounted() {
    this.test();
    this.readTotleRoom();
  },
  methods: {
    async test() {
      this.aaa = [];

      const querySnapshot = await getDocs(collection(db, "Room"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.aaa.push(doc.data());
        // console.log(doc.data());
      });
      this.Loading = false;
    },

    edittext(text, n) {
      if (text.length > n) {
        text = text.substring(0, n - 3) + " ...";
      }
      return text;
    },
    onFileSelete(even) {
      this.seleteFile = even.target.files[0];
    },
    async upload() {
      const storageRef = ref(
        storage,
        "Room" + this.aaa[this.iofClick].IdRoom + "/imgRoom.jpg"
      );
      this.Loading = true;
      const uploadTask = uploadBytesResumable(storageRef, this.seleteFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + this.progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            this.upload1(downloadURL);
          });
        }
      );
    },
    async upload1(Url) {
      await setDoc(doc(db, "Room", this.aaa[this.iofClick].IdRoom + ""), {
        NameRoom: this.aaa[this.iofClick].NameRoom,
        Details: this.aaa[this.iofClick].Details,
        Numbersit: this.aaa[this.iofClick].Numbersit,
        Location: this.aaa[this.iofClick].Location,
        Img_Url: Url,
        show: true,
        IdRoom: this.aaa[this.iofClick].IdRoom,
      });
      await this.test();
      this.Loading = false;
    },
    async uploadEdit() {
      this.Loading = true;
      switch (this.editdata) {
        case 1:
          await setDoc(doc(db, "Room", this.aaa[this.iofClick].IdRoom + ""), {
            NameRoom: this.textinput,
            Details: this.aaa[this.iofClick].Details,
            Numbersit: this.aaa[this.iofClick].Numbersit,
            Location: this.aaa[this.iofClick].Location,
            Img_Url: this.aaa[this.iofClick].Img_Url,
            IdRoom: this.aaa[this.iofClick].IdRoom,
            show: true,
          });
          break;
        case 2:
          await setDoc(doc(db, "Room", this.aaa[this.iofClick].IdRoom + ""), {
            NameRoom: this.aaa[this.iofClick].NameRoom,
            Details: this.aaa[this.iofClick].Details,
            Numbersit: this.aaa[this.iofClick].Numbersit,
            Location: this.textinput,
            Img_Url: this.aaa[this.iofClick].Img_Url,
            show: true,
            IdRoom: this.aaa[this.iofClick].IdRoom,
          });
          break;
        case 3:
          await setDoc(doc(db, "Room", this.aaa[this.iofClick].IdRoom + ""), {
            NameRoom: this.aaa[this.iofClick].NameRoom,
            Details: this.aaa[this.iofClick].Details,
            Numbersit: this.textinput,
            Location: this.aaa[this.iofClick].Location,
            Img_Url: this.aaa[this.iofClick].Img_Url,
            IdRoom: this.aaa[this.iofClick].IdRoom,
            show: true,
          });
          break;
        case 4:
          await setDoc(doc(db, "Room", this.aaa[this.iofClick].IdRoom + ""), {
            NameRoom: this.aaa[this.iofClick].NameRoom,
            Details: this.textinput,
            Numbersit: this.aaa[this.iofClick].Numbersit,
            Location: this.aaa[this.iofClick].Location,
            Img_Url: this.aaa[this.iofClick].Img_Url,
            show: true,
            IdRoom: this.aaa[this.iofClick].IdRoom,
          });
          break;
        case 0:
          await this.upload();
          break;
        default:
          break;
      }
      await this.test();
      this.popup2 = false;
      this.Loading = false;
    },
    async deleteRoom() {
      this.Loading = true;
      await setDoc(doc(db, "Room", this.aaa[this.iofClick].IdRoom + ""), {
        NameRoom: this.aaa[this.iofClick].NameRoom,
        Details: this.aaa[this.iofClick].Details,
        Numbersit: this.aaa[this.iofClick].Numbersit,
        Location: this.aaa[this.iofClick].Location,
        Img_Url: this.aaa[this.iofClick].Img_Url,
        show: false,
        IdRoom: this.aaa[this.iofClick].IdRoom,
      });
      await this.test();
      this.popup2 = false;
      this.deletepopup = false;
      await this.AddBookingCount();
      this.Loading = false;
    },
    readTotleRoom() {
      const unsub = onSnapshot(doc(db, "Admin", "TotleRoom"), (doc) => {
        this.TotleRoom = doc.data().TotleRoom;
      });
    },
    async AddBookingCount() {
      await setDoc(doc(db, "Admin", "TotleRoom"), {
        TotleRoom: (this.TotleRoom -= 1),
      });
    },
  },
};
</script>
