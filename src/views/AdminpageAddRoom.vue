<template>
  <div>
    <Slidebar />
    <div
      class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
      id="main-content"
    >
      <LoadingScreen v-show="Loading" />
      {{ aaa.length }}
      <form @submit.prevent="upload()">
        <div>
          <label for="">Name Room</label>
          <input type="text" required v-model="NameRoom" />
        </div>

        <div>
          <label for="">Number sit</label>
          <input type="Number" required v-model="Numbersit" />
        </div>
        <div>
          <label for="">Location</label>
          <input type="text" required v-model="Location" />
        </div>
        <div>
          <label for="">Details Room</label>
          <!-- <input type="text" required /> -->
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            required
            v-model="Details"
          ></textarea>
        </div>
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
            >Upload file</label
          >
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            required
            @change="onFileSelete"
            type="file"
          />
        </div>
        <button type="submit" class="py-2 px-2 mt-10 bg-blue-400">
          Upload
        </button>
      </form>
      <button @click="aaaaaaa()">sdasd</button>
    </div>
  </div>
</template>
<script>
import { ref } from "firebase/storage";
import { storage, db } from "../plugin/index";
import { collection, setDoc, doc } from "firebase/firestore";
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
    };
  },
  mounted() {},
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
          console.log("Upload is " + this.progress + "% done");
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
            console.log("File available at", downloadURL);

            this.upload1(downloadURL);
          });
        }
      );
    },
    async upload1(Url) {
      // Add a new document with a generated id.

      await setDoc(doc(db, "Room", (this.aaa.length + 1).toString()), {
        NameRoom: this.NameRoom,
        Details: this.Details,
        Numbersit: this.Numbersit,
        Location: this.Location,
        Img_Url: Url,
        IdRoom: this.aaa.length + 1,
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
      const day = now.getDate() - 10;
      for (let day1 = day; day1 <= day + 10; day1++) {
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
            },
            Time2: {
              IdRoom: this.aaa.length + 1,
              IdUserBooking: null,
              Booking: null,
              IdTime: 2,
              Time: "12:00 - 15:00",
            },
            Time3: {
              IdRoom: this.aaa.length + 1,
              IdUserBooking: null,
              Booking: null,
              IdTime: 3,
              Time: "15:00 - 18:00",
            },
          }
        );
        console.log(
          d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
        );
      }
    },
  },
};
</script>
