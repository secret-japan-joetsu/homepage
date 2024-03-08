<script setup lang="ts">
const items = [
  {
    icon: "ion:ios-clock-outline",
    title: "24時間受付",
    description: "思い立ったら、まず行動。いつでもお問い合わせ受け付けております。",
  },
  {
    icon: "pepicons-pencil:yen-circle",
    title: "安心見積",
    description: "ご相談内容に合わせて、経費込み・追加料金無しの見積もりをご提出させていただきます。",
  },
  {
    icon: "fluent:scales-20-regular",
    title: "弁護士サポート(無料)",
    description: "調査後はご希望に応じて弁護士紹介、弁護士への相談に同行いたします。最後まで安心してお任せください。",
  },
  {
    icon: "streamline:interface-security-shield-personshield-secure-security-person",
    title: "秘密厳守",
    description: "探偵の守秘義務は探偵業法で定められています。調査で知り得た情報を外部へ漏らすことはいたしません。",
  },
];
</script>

<template>
  <div class="w-full p-8 mx-auto bg-amber-100">
    <div class="text-5xl text-center font-bold mb-6">
      選ばれる理由
    </div>
    <div class="container grid grid-cols-4 gap-4 ">
      <div
        v-for="i in items"
        :key="i.title"
        class="bg-white p-6 font-medium"
      >
        <div class="flex flex-row items-center gap-3 ">
          <Icon
            :name="i.icon"
            size="3rem"
          />
          <div class="text-xl">
            {{ i.title }}
          </div>
        </div>
        <div class="text-xl mt-3 leading-loose">
          {{ i.description }}
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>