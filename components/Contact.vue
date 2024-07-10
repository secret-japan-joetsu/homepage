<script setup lang="ts">

</script>

<template>
  <div class="w-full bg-amber-300 p-4 mt-6 lg:mt-12">
    <div class=" mx-auto text-2xl lg:text-5xl text-center font-bold mb-4 lg:my-4 whitespace-break-spaces">
      {{ '相談、完全無料！\nまずはあなたのお悩みをご相談ください！' }}
    </div>
    <div class="xl:container grid lg:grid-cols-3 lg:justify-center gap-y-4 lg:mt-12">
      <div class="divide-y lg:divide-y-2 divide-slate-700 w-full md:w-1/2 lg:w-4/5 md:mx-auto">
        <div class="text-xl md:text-2xl xl:text-3xl text-center font-bold">
          {{ 'メールでのお問い合わせ' }}
        </div>
        <div class="mt-0 lg:mt-4 pt-0 lg:pt-4">
          <div class="text-xl lg:text-2xl text-center font-bold">
            {{ 'secret.japan.joetsu@gmail.com' }}
          </div>
        </div>
      </div>
      <div class="divide-y lg:divide-y-2 divide-slate-700 w-full md:w-1/2 lg:w-4/5 md:mx-auto">
        <div class="text-xl md:text-2xl xl:text-3xl text-center font-bold">
          {{ '電話でのお問い合わせ' }}
        </div>
        <div class="mt-0 lg:mt-4 pt-0 lg:pt-4">
          <div class="text-xl lg:text-2xl text-center font-bold">
            {{ '070-6979-9272' }}
          </div>
        </div>
      </div>
      <div class="divide-y lg:divide-y-2 divide-slate-700 w-full md:w-1/2 lg:w-4/5 md:mx-auto">
        <div class="text-xl md:text-2xl xl:text-3xl text-center font-bold">
          {{ 'LINEでのお問い合わせ' }}
        </div>
        <div class="text-center mt-0 lg:mt-4 pt-2 lg:pt-4">
          <Button
            size="lg" 
            as-child
            class="bg-green-500 rounded-full shadow-xl text-2xl font-bold"
          >
            <a
              href="https://lin.ee/HqEAKtY"
              target="_blank"
            >
              <img
                class="object-contain h-10"
                src="/images/LINE_Brand_icon.png"
              >
              無料相談受付中
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>