<template>
  <div class="h-screen bg-slate-50 flex justify-center items-center">
    <div class="md:overflow-x-hidden overflow-x-scroll">
      <div class="md: shadow-2xl sm:rounded-lg">
        <table class="text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">#</th>
              <th scope="col" class="px-6 py-3">NameRoom</th>
              <th scope="col" class="px-6 py-3">Date</th>
              <th scope="col" class="px-6 py-3">Location</th>

              <th scope="col" class="px-6 py-3">Time</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody v-for="(i, index) in dataUser" :key="index">
            <tr
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              v-if="index >= (x - 1) * 5 && index < x * 5"
            >
              <td class="md:px-6 md:py-4">
                <img
                  :src="dataRoom[i.idproduct - 1].Img_Url"
                  class="w-14 h-14 object-cover rounded-lg"
                  alt=""
                />
              </td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ dataRoom[i.idproduct - 1].NameRoom }}
              </th>
              <td class="px-6 py-4">{{ returnDate(i) }}</td>
              <td class="px-6 py-4">
                {{ dataRoom[i.idproduct - 1].Location }}
              </td>

              <td class="px-6 py-4">{{ getTime(i.Time[0]) }}</td>

              <td class="px-6 py-4">
                <a
                  @click="
                    returnDate(i),
                      (popup = true),
                      (iofClick = index),
                      readDataCount(),
                      chackBookingDate()
                  "
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >Cancel</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="px-5 py-4 md:bg-white bg-slate-50 flex flex-col xs:flex-row items-center xs:justify-between"
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
            @click="dataUser.length / 5 - 1 < x - 1 ? x : x++"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
  <LoadingScreen v-show="loading" />
  <PopupCancel
    :datezaza="datetext"
    v-show="popup"
    @add="popup = false"
    @confirm="cancelBooking(), (popup = false)"
  ></PopupCancel>
</template>
<script>
import PopupCancel from "./PopupCancel.vue";
import LoadingScreen from "./LoadingScreen.vue";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db, auth } from "../plugin/index";
import { setDoc, onSnapshot } from "firebase/firestore";
export default {
  components: {
    PopupCancel,
    LoadingScreen,
  },
  data() {
    return {
      uid: "",
      dataUser: null,
      dataUser2: null,
      dataRoom: [],
      loading: false,
      x: 1,
      dataclick: 0,
      popup: false,
      datacancle: [],
      iofClick: 0,
      datetext: "",
      countBooking: 0,
    };
  },
  mounted() {
    this.chackLogin();
  },
  methods: {
    chackLogin() {
      this.loading = true;
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          this.uid = uid;
          this.login = false;
          await this.readBookProfile();
          await this.readRoomDetail();
          this.loading = false;
        } else {
          this.$router.replace("/login");
        }
      });
    },
    async readRoomDetail() {
      const querySnapshot = await getDocs(collection(db, "Room"));
      console.log("readRoomDetail");
      querySnapshot.forEach((doc) => {
        this.dataRoom.push(doc.data());
      });
      this.dataRoom.sort((a, b) => a.IdRoom - b.IdRoom);
    },
    async readBookProfile() {
      console.log("readBookProfile");

      const docRef = doc(db, "cart", this.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.dataUser = docSnap.data().Product;
        this.dataUser2 = docSnap.data().Product;
        this.dataUser.sort((a, b) => {
          const dateA = new Date(a.Day);
          const dateB = new Date(b.Day);
          return dateA - dateB;
        });
        const data = this.dataUser;
        this.dataUser = data.flatMap((obj) => {
          if (obj.Time.length === 1) {
            return obj;
          } else {
            return obj.Time.map((time) => ({
              Time: [time],
              idproduct: obj.idproduct,
              Day: obj.Day,
            }));
          }
        });
      } else {
        // doc.data() will be undefined in this case
      }
    },
    getDate(d) {
      const date = new Date(d);
      console.log("getDate");

      // Extract the day, month, and year from the date object
      const day = date.getDate();
      const month = date.getMonth() + 1; // add 1 since month is zero-indexed
      const year = date.getFullYear();

      // Create a string with the desired date format
      return `${day}/${month}/${year}`;
    },
    getTime(i) {
      console.log("getTime");

      switch (i) {
        case 1:
          return "9:00 - 12:00";
          break;
        case 2:
          return "12:00 - 15:00";
          break;
        case 3:
          return "15:00 - 18:00";
          break;
        default:
          break;
      }
    },
    async cancelBooking() {
      console.log("cancelBooking");

      this.loading = true;
      let d = new Date(this.dataUser[this.iofClick].Day);
      const docRef = doc(
        db,
        "RoomDetail/" +
          d.getFullYear() +
          "-" +
          (d.getMonth() + 1) +
          "/" +
          d.getDate(),
        this.dataUser[this.iofClick].idproduct
      );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.datacancle = docSnap.data();
      }
      switch (this.dataUser[this.iofClick].Time[0]) {
        case 1:
          await setDoc(
            doc(
              db,
              "RoomDetail/" +
                d.getFullYear() +
                "-" +
                (d.getMonth() + 1) +
                "/" +
                d.getDate(),
              this.dataUser[this.iofClick].idproduct
            ),
            {
              Time1: {
                IdRoom: this.dataUser[this.iofClick].idproduct,
                IdUserBooking: null,
                Booking: null,
                IdTime: 1,
                Time: "9:00 - 12:00",
                Day:
                  d.getFullYear() +
                  "/" +
                  (d.getMonth() + 1) +
                  "/" +
                  d.getDate(),
              },
              Time2: this.datacancle.Time2,
              Time3: this.datacancle.Time3,
            }
          );
          break;
        case 2:
          await setDoc(
            doc(
              db,
              "RoomDetail/" +
                d.getFullYear() +
                "-" +
                (d.getMonth() + 1) +
                "/" +
                d.getDate(),
              this.dataUser[this.iofClick].idproduct
            ),
            {
              Time1: this.datacancle.Time1,
              Time2: {
                IdRoom: this.dataUser[this.iofClick].idproduct,
                IdUserBooking: null,
                Booking: null,
                IdTime: 1,
                Time: "12:00 - 15:00",
                Day:
                  d.getFullYear() +
                  "/" +
                  (d.getMonth() + 1) +
                  "/" +
                  d.getDate(),
              },
              Time3: this.datacancle.Time3,
            }
          );
          break;
        case 3:
          await setDoc(
            doc(
              db,
              "RoomDetail/" +
                d.getFullYear() +
                "-" +
                (d.getMonth() + 1) +
                "/" +
                d.getDate(),
              this.dataUser[this.iofClick].idproduct
            ),
            {
              Time1: this.datacancle.Time1,
              Time2: this.datacancle.Time2,
              Time3: {
                IdRoom: this.dataUser[this.iofClick].idproduct,
                IdUserBooking: null,
                Booking: null,
                IdTime: 1,
                Time: "15:00 - 18:00",
                Day:
                  d.getFullYear() +
                  "/" +
                  (d.getMonth() + 1) +
                  "/" +
                  d.getDate(),
              },
            }
          );
          break;
        default:
          break;
      }
      for (let index = 0; index < this.dataUser2.length; index++) {
        if (this.dataUser2[index].Day == this.dataUser[this.iofClick].Day) {
          if (this.dataUser2[index].Time.length > 1) {
            for (let j = 0; j < this.dataUser2[index].Time.length; j++) {
              if (
                this.dataUser2[index].Time[j] ==
                this.dataUser[this.iofClick].Time[0]
              ) {
                this.dataUser2[index].Time.splice(j, 1);
                break;
              }
            }
          } else {
            this.dataUser2.splice(index, 1);
          }
        }
      }
      const user = auth.currentUser;
      const citiesRef = collection(db, "cart");
      await setDoc(doc(citiesRef, user.uid), {
        UID: user.uid,
        Product: this.dataUser2,
      });
      await this.readBookProfile();
      await this.readRoomDetail();
      await this.AddBookingCount();
      this.chackBookingDate();
      this.loading = false;
    },
    chackBookingDate() {
      console.log("chackBookingDate");
      const now = new Date();
      now.setDate(now.getDate() - 1);
      const filteredSchedules = this.dataUser.filter((schedule) => {
        const scheduleDate = new Date(schedule.Day);
        return scheduleDate > now;
      });
      const newSchedules = [];
      filteredSchedules.forEach((schedule) => {
        newSchedules.push(schedule);
      });
      this.dataUser = newSchedules;
    },
    returnDate(i) {
      console.log("returnDate");

      const date = new Date(i.Day); // current date and time
      const options = {
        weekday: "long", // full day name (e.g. "วันเสาร์")
        year: "numeric", // year (e.g. "2566")
        month: "long", // full month name (e.g. "มกราคม")
        day: "numeric", // day of the month (e.g. "6")
        timeZone: "Asia/Bangkok", // specify timezone (optional)
        localeMatcher: "best fit", // locale matching algorithm (optional)
      };

      const thaiDate = date.toLocaleDateString("th-TH", options);
      this.datetext = `${thaiDate} เวลา ${this.getTime(i.Time[0])}`;
      return thaiDate;
    },
    readDataCount() {
      console.log("readDataCount");

      const unsub = onSnapshot(doc(db, "Admin", "TotleBooking"), (doc) => {
        this.countBooking = doc.data().TotleBooking;
      });
    },
    async AddBookingCount() {
      await setDoc(doc(db, "Admin", "TotleBooking"), {
        TotleBooking: (this.countBooking -= 1),
      });
    },
  },
};
</script>
<style></style>
