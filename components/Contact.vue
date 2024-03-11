<script setup lang="ts">

</script>

<template>
  <div class="w-full bg-amber-300 p-4 mt-12">
    <div class="w-2/3 mx-auto text-2xl md:text-5xl text-center font-bold my-4 whitespace-break-spaces">
      {{ '初回相談、完全無料！\nまずはあなたのお悩みをご相談ください！' }}
    </div>
    <div class="md:container grid md:grid-cols-2 md:justify-center gap-y-4 md:mt-12">
      <div class="divide-y md:divide-y-2 divide-black md:w-3/4 md:mx-auto">
        <div class="text-xl md:text-4xl text-center font-bold">
          {{ 'お電話での問い合わせ' }}
        </div>
        <div class="mt-2 md:mt-4 pt-2 md:pt-4">
          <div class="text-2xl md:text-3xl text-center font-bold">
            <Icon
              name="ic:twotone-call"
              size="2rem"
              color="white"
              class="bg-pink-300 rounded-full p-1"
            />
            {{ '0120-519-773' }}
          </div>
          <div class="text-sm text-center font-bold">
            {{ '受付時間：24時間365日' }}
          </div>
        </div>
      </div>
      <div class=" divide-y md:divide-y-2 divide-black md:w-3/4 md:mx-auto">
        <div class="text-xl md:text-4xl text-center font-bold">
          {{ 'LINEでの問い合わせ' }}
        </div>
        <div class="text-center mt-2 md:mt-4 pt-2 md:pt-4">
          <Button
            size="lg"
            class="bg-green-500 rounded-xl w-2/3"
          >
            <img 
              class="object-scale-down h-10"
              src="/images/LINE_Brand_icon.png"
            >
            無料相談受付中
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>