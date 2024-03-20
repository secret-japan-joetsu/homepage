<script setup lang="ts">

</script>

<template>
  <div class="w-full bg-amber-300 p-4 mt-6 lg:mt-12">
    <div class=" mx-auto text-2xl lg:text-5xl text-center font-bold mb-4 lg:my-4 whitespace-break-spaces">
      {{ '初回相談、完全無料！\nまずはあなたのお悩みをご相談ください！' }}
    </div>
    <div class="lg:container grid md:grid-cols-2 lg:justify-center gap-y-4 lg:mt-12">
      <div class="divide-y lg:divide-y-2 divide-slate-700 md:w-3/4 md:mx-auto">
        <div class="text-xl lg:text-4xl text-center font-bold">
          {{ 'お電話での問い合わせ' }}
        </div>
        <div class="mt-0 lg:mt-4 pt-0 lg:pt-4">
          <div class="text-xl lg:text-3xl text-center font-bold">
            {{ 'メアドメアドメアドメアド' }}
          </div>
          <div class="text-sm text-center font-bold">
            {{ '受付時間：24時間365日' }}
          </div>
        </div>
      </div>
      <div class="divide-y lg:divide-y-2 divide-slate-700 md:w-3/4 md:mx-auto">
        <div class="text-xl lg:text-4xl text-center font-bold">
          {{ 'LINEでの問い合わせ' }}
        </div>
        <div class="text-center mt-0 lg:mt-4 pt-2 lg:pt-4">
          <Button
            size="lg"
            class="bg-green-500 rounded-full shadow-xl text-2xl font-bold"
          >
            <img
              class="object-contain h-10"
              src="/images/LINE_Brand_icon.png"
            >
            無料相談受付中
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>