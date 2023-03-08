<template>
  <div
    class="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-700 py-12 px-4 sm:px-6 lg:px-8"
  >
    <!-- bg-yellow-100 -->
    <!-- <div class="absolute bg-black opacity-60 inset-0 z-0"></div> -->
    <div class="mt-2 items-center z-10">
      <form
        @submit.prevent="login"
        class="md:py-10 py-10 bg-white max-w-sm px-10 md:px-20 mx-auto rounded-xl shadow-xl dark:bg-gray-800 dark:rounded-xl dark:shadow-xl overflow-hidden space-y-10"
      >
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm px-2 font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            name="email"
            v-model="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            name="password"
            v-model="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required=""
          />
          <p v-show="errorlogin" class="text-red-600 font-bold mt-2">
            {{ errormessage }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <router-link to="/register"
            ><a class="text-blue-700 hover:underline dark:text-blue-500"
              >Create account</a
            ></router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugin/index.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      xx: "",
      errormessage: "",
      errorlogin: false,
    };
  },
  methods: {
    login() {
      // const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
          this.xx = user;
          // loginผ่าน แล้วให้เปลี่ยนไปหน้า about
          this.errorlogin = false;
          this.$router.replace("/");
          //   this.$router.replace("/about");
        })
        .catch((error) => {
          const errorCode = error.code;
          this.errorlogin = true;
          if (errorCode == "auth/user-not-found") {
            this.errormessage = "Couldn't find this e-mail";
          }
          if (errorCode == "auth/wrong-password") {
            this.errormessage = "Wrong password !!";
          }
          if (errorCode == "auth/too-many-requests") {
            this.errormessage = "Please wait to log in again.";
          }
        });
    },
  },
};
</script>

<style></style>
