<script setup lang="ts">

</script>

<template>
  <div class="hidden md:flex fixed left-8 bottom-4 bg-orange-200 p-4 flex-col gap-1 justify-center items-center">
    <div class="text-2xl font-bold">
      お問い合わせ
    </div>
    <div class="flex gap-4">
      <img 
        class="object-scale-down h-10"
        src="/images/LINE_Brand_icon.png"
      >
      <Icon
        name="material-symbols:mail-outline"
        size="3rem"
      />
    </div>
    <div class="font-bold">
      24H無料相談受付中
    </div>
    <div class="text-xl text-center font-bold">
      <Icon
        name="ic:twotone-call"
        size="1.5rem"
        color="white"
        class="bg-pink-300 rounded-full p-1"
      />
      {{ '0120-519-773' }}
    </div>
  </div>
  <div class="md:hidden grid grid-cols-2 fixed left-0 right-0 bottom-0">
    <Button
      size="lg"
      class="bg-green-500 w-full rounded-none"
    >
      <img 
        class="object-scale-down h-10"
        src="/images/LINE_Brand_icon.png"
      >
      無料相談受付中
    </Button>
    <div class="bg-pink-300 flex justify-center items-center gap-2">
      <Icon
        name="ic:twotone-call"
        size="2rem"
        color="#f9a8d4"
        class="bg-white rounded-full p-1"
      />
      <div class="text-xl text-center font-bold text-white">
        {{ '0120-519-773' }}
      </div>
    </div>
  </div>  
</template>



<style scoped>

</style>