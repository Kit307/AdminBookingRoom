<template>
  <div>
    <Slidebar />
    <div
      class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
      id="main-content"
    >
      <LoadingScreen v-show="Loading" />

      <div class="flex items-center justify-center p-12">
        <!-- Author: FormBold Team -->
        <!-- Learn More: https://formbold.com -->
        <div class="mx-auto w-full max-w-[1000px]">
          <form @submit.prevent="upload()">
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                ชื่อห้อง
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="ชื่อห้อง"
                v-model="NameRoom"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                จำนวนที่นั่ง
              </label>
              <input
                required
                type="number"
                name="email"
                v-model="Numbersit"
                placeholder="0"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                สถานที่อยู่
              </label>
              <input
                required
                type="text"
                name="subject"
                placeholder="ตึก80ปี"
                v-model="Location"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="File image"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                ไฟล์รูปภาพห้อง
              </label>
              <label class="block">
                <span class="sr-only">Choose File</span>
                <input
                  required
                  type="file"
                  @change="onFileSelete"
                  class="block w-full bg-white text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-blue-800 hover:file:bg-blue-100"
                />
              </label>
            </div>
            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                รายละเอียดห้อง
              </label>
              <textarea
                rows="4"
                required
                name="message"
                placeholder="รายละเอียดห้อง"
                v-model="Details"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "firebase/storage";
import { storage, db } from "../plugin/index";
import { collection, setDoc, doc, onSnapshot } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import LoadingScreen from "../components/LoadingScreen.vue";
import Slidebar from "../components/Slidebar.vue";
export default {
  components: {
    Slidebar,
    LoadingScreen,
  },
  data() {
    return {
      NameRoom: null,
      Details: null,
      Numbersit: null,
      Location: null,
      seleteFile: null,
      progress: 0,
      aaa: [],
      Loading: false,
      TotleRoom: 0,
    };
  },
  mounted() {
    this.readTotleRoom();
  },
  methods: {
    onFileSelete(even) {
      this.seleteFile = even.target.files[0];
    },
    async upload() {
      await this.ReadId();
      const storageRef = ref(
        storage,
        "Room" + (this.aaa.length + 1) + "/imgRoom.jpg"
      );
      this.Loading = true;
      const uploadTask = uploadBytesResumable(storageRef, this.seleteFile);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            this.upload1(downloadURL);
          });
        }
      );
    },
    async upload1(Url) {
      // Add a new document with a generated id.
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate() - 3;
      this.AddBookingCount();
      await setDoc(doc(db, "Room", (this.aaa.length + 1).toString()), {
        NameRoom: this.NameRoom,
        Details: this.Details,
        Numbersit: this.Numbersit,
        Location: this.Location,
        Img_Url: Url,
        IdRoom: this.aaa.length + 1,
        show: true,
      });
      await this.aaaaaaa();

      this.Loading = false;
    },
    async ReadId() {
      const querySnapshot = await getDocs(collection(db, "Room"));
      querySnapshot.forEach((doc) => {
        this.aaa.push(doc.data());
      });
    },
    async aaaaaaa() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate() - 3;
      for (let day1 = day; day1 <= day + 100; day1++) {
        const d = new Date(year, month, day1);
        await setDoc(
          doc(
            db,
            "RoomDetail/" +
              d.getFullYear() +
              "-" +
              (d.getMonth() + 1) +
              "/" +
              d.getDate() +
              "/" +
              (this.aaa.length + 1)
          ),
          {
            Time1: {
              IdRoom: this.aaa.length + 1,
              IdUserBooking: null,
              Booking: null,
              IdTime: 1,
              Time: "9:00 - 12:00",
              Day:
                d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
            },
            Time2: {
              IdRoom: this.aaa.length + 1,
              IdUserBooking: null,
              Booking: null,
              IdTime: 2,
              Time: "12:00 - 15:00",
              Day:
                d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
            },
            Time3: {
              IdRoom: this.aaa.length + 1,
              IdUserBooking: null,
              Booking: null,
              IdTime: 3,
              Time: "15:00 - 18:00",
              Day:
                d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
            },
          }
        );
      }
      this.$router.replace("/admin/Detel");
    },
    readTotleRoom() {
      const unsub = onSnapshot(doc(db, "Admin", "TotleRoom"), (doc) => {
        this.TotleRoom = doc.data().TotleRoom;
      });
    },
    async AddBookingCount() {
      await setDoc(doc(db, "Admin", "TotleRoom"), {
        TotleRoom: (this.TotleRoom += 1),
      });
    },
  },
};
</script>
