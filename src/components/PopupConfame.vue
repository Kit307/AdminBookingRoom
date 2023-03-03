<template>
  <div>
    <div class="relative flex justify-center items-center">
      <div
        id="menu"
        @click="$emit('add', Math.random())"
        class="w-full h-full bg-gray-600 bg-opacity-80 top-0 fixed sticky-0"
      >
        <div
          class="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center"
        >
          <div
            class="w-96 md:w-auto relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36 rounded-3xl"
          >
            <div role="banner">
              <img src="../assets/confirmation.png" alt="" class="h-32" />
            </div>
            <div class="mt-12">
              <h1
                role="main"
                class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
              >
                คุณตั้งการจองจริงๆใช่ไหม
              </h1>
            </div>
            <div class="mt">
              <p
                class="mt-6 sm:w-80 text-base leading-7 text-center text-gray-800"
              >
                Please, accept these sweeties to continue enjoying our site!
              </p>
            </div>
            <button
              @click="$emit('confirm', Math.random())"
              class="w-full sm:w-auto mt-14 text-lg leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black"
            >
              แน่นอน
            </button>
            <a
              href="javascript:void(0)"
              @click="$emit('add', Math.random())"
              class="mt-6 text-base leading-none focus:outline-none hover:border-gray-800 focus:border-gray-800 border-b border-transparent text-center text-gray-800"
              >ไม่ละ ฉันเปลี่ยนใจละ</a
            >
            <button
              @click="$emit('add', Math.random())"
              class="text-gray-800 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              aria-label="close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
