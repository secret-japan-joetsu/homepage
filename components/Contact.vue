<script setup lang="ts">
</script>

<template>
  <div class="w-full bg-amber-300 p-4 mt-6 lg:mt-12">
    <div class=" mx-auto text-2xl lg:text-5xl text-center font-bold mb-4 lg:my-4 whitespace-break-spaces">
      {{ '相談、完全無料！\nまずはあなたのお悩みをご相談ください！' }}
    </div>
    <div class="mx-auto mb-8 w-full max-w-4xl rounded-3xl bg-white/70 p-4 text-center text-sm font-bold leading-7 text-slate-700 backdrop-blur">
      フォームからのご相談は、専用ページから24時間送信できます。お急ぎの場合は電話・LINEもご利用いただけます。
      <div class="mt-4">
        <Button
          size="lg"
          as-child
          class="rounded-full bg-slate-900 px-8 text-lg font-bold shadow-xl"
        >
          <NuxtLink to="/contact">
            無料相談
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="xl:container grid lg:grid-cols-3 lg:justify-center gap-y-4 lg:mt-12">
      <div class="divide-y lg:divide-y-2 divide-slate-700 w-full md:w-1/2 lg:w-4/5 md:mx-auto">
        <div class="text-xl md:text-2xl xl:text-3xl text-center font-bold">
          {{ 'メールでのお問い合わせ' }}
        </div>
        <div class="mt-0 lg:mt-4 pt-0 lg:pt-4">
          <a
            href="mailto:secret.japan.joetsu@gmail.com"
            class="block break-all text-center text-xl font-bold underline-offset-4 hover:underline lg:text-2xl"
          >
            secret.japan.joetsu@gmail.com
          </a>
        </div>
      </div>
      <div class="divide-y lg:divide-y-2 divide-slate-700 w-full md:w-1/2 lg:w-4/5 md:mx-auto">
        <div class="text-xl md:text-2xl xl:text-3xl text-center font-bold">
          {{ '電話でのお問い合わせ' }}
        </div>
        <div class="mt-0 lg:mt-4 pt-0 lg:pt-4">
          <a
            href="tel:07069799272"
            class="block text-center text-xl font-bold underline-offset-4 hover:underline lg:text-2xl"
          >
            070-6979-9272
          </a>
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
