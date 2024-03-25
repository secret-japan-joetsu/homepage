<script setup lang="ts">
const items = [
  {
    icon: "/images/why-choose/24h.png",
    title: "24時間受付",
    description: "24時間365日いつでもお問い合わせ受け付けております。",
  },
  {
    icon: "/images/why-choose/cost.png",
    title: "安心見積",
    description: "ご相談内容に合わせて、経費込み・追加料金無しの見積もりをご提出させていただきます。",
  },
  {
    icon: "/images/why-choose/balance.png",
    title: "弁護士サポート",
    description: "調査後はご希望に応じて弁護士を紹介し、弁護士への相談に同行いたします。最後まで安心してお任せください。",
  },
  {
    icon: "/images/why-choose/protect.png",
    title: "秘密厳守",
    description: "探偵の守秘義務は探偵業法で定められています。調査で知り得た情報を外部へ漏らすことはいたしません。",
  },
];
</script>

<template>
  <div class="mx-auto bg-amber-100">
    <div class="container  p-8 ">
      <div class="text-2xl lg:text-5xl text-center font-bold mb-2 lg:mb-6">
        選ばれる理由
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4">
        <div
          v-for="i in items"
          :key="i.title"
          class="bg-white p-6 font-medium"
        >
          <div class="flex flex-row items-center gap-x-6">
            <img
              class="object-contain h-12 w-12 lg:h-16 lg:w-16"
              :src="i.icon"
            >
            <div class="text-xl font-bold">
              {{ i.title }}
            </div>
          </div>
          <div class="lg:text-lg mt-3 lg:leading-loose">
            {{ i.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>