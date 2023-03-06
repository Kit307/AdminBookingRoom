<template>
  <div class="h-screen bg-slate-50 flex justify-center items-center">
    <div class="">
      <div class="relative overflow-x-auto shadow-2xl sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">#</th>
              <th scope="col" class="px-6 py-3">NameRoom</th>
              <th scope="col" class="px-6 py-3">Location</th>
              <th scope="col" class="px-6 py-3">Date</th>
              <th scope="col" class="px-6 py-3">Time</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="i in dataUser"
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <td class="px-6 py-4">
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
              <td class="px-6 py-4">
                {{ dataRoom[i.idproduct - 1].Location }}
              </td>
              <td class="px-6 py-4">{{ getDate(i.Day) }}</td>
              <td class="px-6 py-4">{{ getTime(i.Time[0]) }}</td>

              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >Cancel</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <LoadingScreen v-show="loading" />
</template>
<script>
import LoadingScreen from "./LoadingScreen.vue";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db, auth } from "../plugin/index";
export default {
  components: { LoadingScreen },
  data() {
    return {
      uid: "",
      dataUser: null,
      dataRoom: [],
      loading: false,
    };
  },
  mounted() {
    this.chackLogin();
  },
  methods: {
    chackLogin() {
      // const auth = getAuth();
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
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.dataRoom.push(doc.data());
      });

      this.dataRoom.sort((a, b) => a.IdRoom - b.IdRoom);
    },
    async readBookProfile() {
      const docRef = doc(db, "cart", this.uid);
      const docSnap = await getDoc(docRef);
      const data = [
        { Time: [2], idproduct: "2", Day: "2023/3/8" },
        { Day: "2023/3/14", Time: [3], idproduct: "2" },
      ];

      data.sort((a, b) => {
        const dateA = new Date(a.Day);
        const dateB = new Date(b.Day);
        return dateA - dateB;
      });

      console.log(data);
      if (docSnap.exists()) {
        this.dataUser = docSnap.data().Product;
        this.dataUser.sort((a, b) => {
          const dateA = new Date(a.Day);
          const dateB = new Date(b.Day);
          return dateA - dateB;
        });
        const data = this.dataUser;

        this.dataUser = data.flatMap((obj) => {
          if (obj.Time.length === 1) {
            // If the object has only one time, return it as is
            return obj;
          } else {
            // If the object has multiple times, create a new object for each time
            return obj.Time.map((time) => ({
              Time: [time],
              idproduct: obj.idproduct,
              Day: obj.Day,
            }));
          }
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    getDate(d) {
      const date = new Date(d);

      // Extract the day, month, and year from the date object
      const day = date.getDate();
      const month = date.getMonth() + 1; // add 1 since month is zero-indexed
      const year = date.getFullYear();

      // Create a string with the desired date format
      return `${day}/${month}/${year}`;
    },
    getTime(i) {
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
  },
};
</script>
<style></style>
