<script setup lang="ts">
// const socials = [
//   {
//     link: '',
//     icon: 'logos:facebook'
//   },
//   {
//     link: '',
//     icon: 'skill-icons:instagram'
//   },
//   {
//     link: '',
//     icon: 'mingcute:social-x-line'
//   },
// ]
</script>

<template>
  <div class="bg-white">
    <div class="container p-4 lg:p-6 mb-24 lg:mb-0 grid md:grid-cols-4 min-h-32 lg:min-h-48 justify-center ">
      <div class="col-span-3 h-full flex flex-col justify-between">
        <div class="flex items-center">
          <img
            class="object-contain h-16 w-16"
            src="/images/logo.png"
          >
          <div class="text-end tracking-tight ml-2">
            <div class="text-lg extra-bold">
              シークレットジャパン
            </div>
            <div>
              上越・柏崎
            </div>
          </div>
        </div>
        <div class="text-xs">
          Copyright © シークレットジャパン上越・柏崎 All Rights Reserved.
        </div>
      </div>
      <div class="hidden md:flex flex-col gap-2">
        <div class="text-lg font-bold whitespace-break-spaces">
          {{ '届出\n新潟県公安委員会\n第46240005号' }}
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.extra-bold {
  text-shadow: 0px 1px, 1px 0px, 1px 1px;
}
</style>