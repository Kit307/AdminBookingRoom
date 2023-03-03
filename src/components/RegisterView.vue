<template>
  <!-- component -->
  <div class="h-screen bg-gray-50 dark:bg-gray-700 py-40">
    <!-- Container -->
    <div class="container mx-auto bg-gray-50 dark:bg-gray-700">
      <div class="flex justify-center px-6">
        <!-- Row -->
        <div
          class="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl rounded-lg border border-gray-300 dark:border-none"
        >
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style="
              background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
            "
          ></div>
          <!-- Col -->
          <div
            class="w-full lg:w-7/12 bg-white dark:text-white dark:bg-gray-800 p-5 rounded-lg lg:rounded-l-none"
          >
            <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
            <form
              @submit.prevent="reg"
              class="px-8 pt-6 pb-8 mb-4 bg-white rounded dark:bg-gray-800 dark:rounded-xl dark:shadow-xl"
            >
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="firstName"
                  >
                    First Name
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="firstName"
                    required
                    v-model="fname"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="lastName"
                    v-model="lname"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="lastName"
                  >
                    Phone
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="phone"
                    required
                    maxlength="10"
                    minlength="10"
                    v-model="phone"
                    type="text"
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                    placeholder="0812345678"
                  />
                </div>
              </div>

              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="email"
                    required
                    type="email"
                    v-model="email"
                    placeholder="Email"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="c_password"
                  >
                    Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="c_password"
                    type="password"
                    required
                    v-model="password"
                    placeholder="••••••••"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="password"
                  >
                    Confirm Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="password"
                    required
                    type="password"
                    v-model="cpassword"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div class="mb-24">
                <p v-show="errorlogin" class="text-red-600 font-bold mt-2">
                  {{ errormessage }}
                </p>
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Account
                </button>
              </div>

              <hr class="mb-6 border-t" />
              <div class="text-center">
                <router-link to="/login">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
                    Already have an account? Login!
                  </a>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</template>

<script>
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../plugin/index";
export default {
  data() {
    return {
      email: "",
      password: "",
      cpassword: "",
      fname: "",
      lname: "",
      phone: "",
      xx: "",
      errormessage: "asdasdasdasd",
      errorlogin: false,
      show: true,
    };
  },
  methods: {
    reg() {
      //   const auth = getAuth();
      if (this.cpassword == this.password) {
        (this.show = false),
          createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              this.profile();
              // console.log(user);
              this.xx = user;
              this.errorlogin = false;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              if (errorCode == "auth/email-already-in-use") {
                this.errormessage = "This Email in use";
              } else {
                this.errormessage = errorCode;
              }
              this.errorlogin = true;
              console.log(errorCode);
              // ..
            });
      } else {
        this.errormessage = "Passwords do not match";
        this.errorlogin = true;
      }
    },

    async profile() {
      this.readUid;
      const user = auth.currentUser;
      const citiesRef = collection(db, "Profile");
      await setDoc(doc(citiesRef, user.uid), {
        name: this.fname + "  " + this.lname,
        fname: this.fname,
        lname: this.lname,
        Admin: false,
        Phone: this.phone,
        UID: user.uid,
        Email: user.email,
        totalMoney: 0,
      });
      const citiesRef1 = collection(db, "cart");
      setDoc(doc(citiesRef1, user.uid), {
        UID: user.uid,
        Product: [],
      });

      this.logout();
    },
    logout() {
      //   const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-outsuccessful.
          //   this.$router.push("/");
          this.$router.replace("/login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
