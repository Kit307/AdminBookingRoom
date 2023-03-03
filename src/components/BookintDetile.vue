<template>
  <div class="flex h-screen justify-center items-center bg-slate-50">
    {{}}
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
            </div>
            <div class="absolute bottom-0">
              <a
                @click="Popup = true"
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
                @click="Popup = true"
                href="#"
                class="inline-flex items-center px-3 mx-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ sss[productid - 1].Time.Time2.Time }} </a
              ><a
                @click="Popup = true"
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                {{ sss[productid - 1].Time.Time3.Time }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PopupConfame v-show="Popup" @add="Popup = false" @confirm="asd()" />
</template>
<script>
import PopupConfame from "./PopupConfame.vue";
export default {
  components: { PopupConfame },
  props: ["sss"],
  data() {
    return { productid: this.$route.params.id, Popup: false };
  },
  methods: {
    asd() {
      console.log(112);
    },
  },
};
</script>
<style></style>
