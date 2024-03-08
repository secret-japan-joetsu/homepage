<script setup lang="ts">
const socials = [
  {
    link: '',
    icon: 'logos:facebook'
  },
  {
    link: '',
    icon: 'skill-icons:instagram'
  },
  {
    link: '',
    icon: 'mingcute:social-x-line'
  },
]
</script>

<template>
  <div class="container p-6 grid grid-cols-4 min-h-48 justify-center">
    <div class="col-span-3 h-full flex flex-col justify-between">
      <NuxtImg
        src="images/logo.png"
        width="250"
      />
      <div class="text-pink-400 text-xs">
        Copyright © 総合探偵社シークレットジャパン中越本部 All Rights Reserved.
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="text-sm whitespace-break-spaces">
        {{ '新潟県公安委員会番\n第46230004号' }}
      </div>
      <div class="text-lg font-medium">
        <Icon
          name="ic:twotone-call"
          size="2rem"
          color="white"
          class="bg-pink-300 rounded-full p-1"
        />
        {{ '0120-519-773' }}
      </div>
      <div class="flex gap-2">
        <Icon
          v-for="s in socials"
          :key="s.icon"
          :name="s.icon"
          size="1.5rem"
        />
      </div>
    </div>
  </div>
</template>



<style scoped></style>