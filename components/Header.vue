<template>
  <div class="min-h-16 lg:min-h-24 flex items-center flex-row fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
    <div class="container flex justify-between items-center md:p-2">
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
      <Button
        size="lg"
        as-child
        class="bg-green-500 rounded-lg shadow-md text-xl lg:text-2xl font-bold h-10 lg:h-12 hidden md:flex"
      >
        <a
          href="https://lin.ee/HqEAKtY"
          target="_blank"
        >
          <img
            class="object-contain h-9 lg:h-12"
            src="/images/LINE_Brand_icon.png"
          >
          無料相談受付中
        </a>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.extra-bold {
  text-shadow: 0px 1px, 1px 0px, 1px 1px;
}
</style>