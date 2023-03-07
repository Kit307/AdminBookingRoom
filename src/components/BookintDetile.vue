<template>
  <div class="flex h-screen justify-center items-center bg-slate-50">
    <div class="bg-red-100 px-10 py-10 max-w-4xl rounded-2xl shadow-2xl">
      <div class="flex gap-10">
        <img
          :src="sss[productid - 1].Details.Img_Url"
          alt=""
          class="h-[26rem] w-80 rounded-2xl object-cover shadow-2xl"
        />
        <div class="relative">
          <div>
            <div class="flex justify-between items-end">
              <div class="text-2xl font-semibold">
                ห้อง {{ sss[productid - 1].Details.NameRoom }}
              </div>
              <a
                ><router-link
                  @click="$emit('clase', Math.random())"
                  :to="'/Bookingpage/'"
                  class="underline"
                >
                  Back
                </router-link></a
              >
            </div>

            <div class="text-lg font-normal py-10">
              <div>
                <span class="font-semibold">จำนวนคน </span
                >{{ sss[productid - 1].Details.Numbersit }}
              </div>
              <span class="font-semibold">ที่อยู่ </span
              >{{ sss[productid - 1].Details.Location }}
              <div>
                <span class="font-semibold">รายละเอียด </span
                >{{ sss[productid - 1].Details.Details }}
              </div>
              <div class="font-black text-red-700">{{ date }}</div>
            </div>
            <div class="absolute bottom-0">
              <a
                @click="(Popup = true), (click = 1)"
                v-if="sss[productid - 1].Time.Time1.Booking == null"
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ sss[productid - 1].Time.Time1.Time }}
              </a>
              <p
                v-else
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ sss[productid - 1].Time.Time1.Time }}
              </p>
              <a
                @click="(Popup = true), (click = 2)"
                v-if="sss[productid - 1].Time.Time2.Booking == null"
                href="#"
                class="inline-flex items-center px-3 py-2 mx-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ sss[productid - 1].Time.Time2.Time }}
              </a>
              <p
                v-else
                href="#"
                class="inline-flex items-center px-3 py-2 mx-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ sss[productid - 1].Time.Time2.Time }}
              </p>
              <a
                @click="(Popup = true), (click = 3)"
                v-if="sss[productid - 1].Time.Time3.Booking == null"
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ sss[productid - 1].Time.Time3.Time }}
              </a>
              <p
                v-else
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ sss[productid - 1].Time.Time3.Time }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PopupConfame
    v-show="Popup"
    @add="Popup = false"
    :datezaza="dateset"
    @confirm="asd()"
  />
  <LoadingScreen v-show="loading" />
</template>
<script>
import LoadingScreen from "./LoadingScreen.vue";
import PopupConfame from "./PopupConfame.vue";
import { collection } from "firebase/firestore";
import { auth, db } from "../plugin/index.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { getDocs, setDoc } from "firebase/firestore";

export default {
  components: {
    LoadingScreen,
    PopupConfame,
  },
  props: ["sss", "date"],
  async mounted() {
    this.loading = true;
    this.readData();
    this.chackLogin();
    const querySnapshot = await getDocs(collection(db, "cart"));
    querySnapshot.forEach((doc) => {
      this.profiledata.push({ id: doc.id, data: doc.data() });
    });
    this.loading = false;
    const unsub = onSnapshot(doc(db, "Admin", "TotleBooking"), (doc) => {
      this.countBooking = doc.data().TotleBooking;
    });
  },
  data() {
    return {
      productid: this.$route.params.id,
      Popup: false,
      click: null,
      loading: false,
      profiledata: [],
      datacart: [],
      dataproduct: "",
      uid: "",
      login: false,
      logoutvar: true,
      cardnew: false,
      DataRoomDetail: "",
      Time: ["Time1", "Time2", "Time3"],
      dateset: this.date,
      countBooking: 0,
    };
  },
  methods: {
    asd() {
      this.adddatatocart();
    },
    chackLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          this.uid = uid;
          this.login = true;
        } else {
          this.login = false;
        }
      });
    },
    async adddatatocart() {
      if (this.login) {
        this.loading = true;

        await setDoc(doc(db, "Admin", "TotleBooking"), {
          TotleBooking: (this.countBooking += 1),
        });
        this.checkproduct();
      } else {
        this.logoutvar = false;
      }
    },
    loginzaza() {
      this.$router.replace("/login");
    },
    backproduct() {
      this.$router.replace("/Bookingpage");
      this.$emit("clase", Math.random());
    },
    async readData() {
      const user = auth.currentUser;
      onSnapshot(doc(db, "cart", user.uid), (doc) => {
        this.datacart = doc.data();
      });
      const querySnapshot = await getDocs(collection(db, "cart"));
      querySnapshot.forEach((doc) => {
        this.profiledata.push({ id: doc.id, data: doc.data() });
      });
      let d = new Date(this.sss[this.productid - 1].Time.Time1.Day);
      onSnapshot(
        doc(
          db,
          "RoomDetail/" +
            d.getFullYear() +
            "-" +
            (d.getMonth() + 1) +
            "/" +
            d.getDate(),
          this.productid
        ),
        (doc) => {
          this.DataRoomDetail = doc.data();
        }
      );
    },
    async profile() {
      const user = auth.currentUser;
      const citiesRef = collection(db, "cart");
      await setDoc(doc(citiesRef, user.uid), {
        UID: user.uid,
        Product: this.datacart.Product,
      });
      let d = new Date(this.sss[this.productid - 1].Time.Time1.Day);

      switch (this.click) {
        case 1:
          this.DataRoomDetail.Time1.Booking = false;
          this.DataRoomDetail.Time1.IdUserBooking = user.uid;
          break;
        case 2:
          this.DataRoomDetail.Time2.Booking = false;
          this.DataRoomDetail.Time2.IdUserBooking = user.uid;
          break;
        case 3:
          this.DataRoomDetail.Time3.Booking = false;
          this.DataRoomDetail.Time3.IdUserBooking = user.uid;
          break;
        default:
          break;
      }
      const Roomdetal = collection(
        db,
        "RoomDetail/" +
          d.getFullYear() +
          "-" +
          (d.getMonth() + 1) +
          "/" +
          d.getDate()
      );
      await setDoc(doc(Roomdetal, this.productid + ""), this.DataRoomDetail);
      this.backproduct();
      this.readData();
    },
    checkproduct() {
      let pro = true;
      for (let index = 0; index < this.datacart.Product.length; index++) {
        if (
          this.datacart.Product[index].Day ==
          this.sss[this.productid - 1].Time.Time1.Day
        ) {
          pro = false;
          this.datacart.Product[index].Time.push(this.click);
          this.datacart.Product[index].Time.sort();
        }
      }

      if (pro) {
        this.datacart.Product.push({
          idproduct: this.productid,
          Day: this.sss[this.productid - 1].Time.Time1.Day,
          Time: [this.click],
        });
      }

      this.profile();
    },
  },
};
</script>
<style></style>
