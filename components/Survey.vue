<script setup lang="ts">
  const items = [
    {
      title: '浮気・不倫調査',
      bg: 'bg-green-100',
      image: '',
      description: `探偵事務所に寄せられる相談で一番多いのがこの浮気・不倫調査。
まさか自分の夫・妻が・・・
もし浮気をしているなら、許してはいけません。
一人で抱え込む必要もありません。
浮気をしたパートナーや浮気相手に対して適切な対策を取るためにも、確実な証拠が必要不可欠です。`,
    },
    {
      title: '婚前調査',
      bg: 'bg-amber-100',
      image: '',
      description: `結婚は人生の一大イベント。
絶対に失敗したくないからこそ、相手のことをちゃんと知り、信頼関係を築くことが大切です。
結婚してからギャンブル癖が発覚して離婚というケースもあります。これからの人生を安心して歩んでいくためにも、一度調査してみませんか？`,
    },
    {
      title: '行方調査',
      bg: 'bg-red-100',
      image: '',
      description: `「お金を貸した相手が連絡が取れない」
「お世話になった人に感謝の言葉を伝えたい」
「家出して帰ってこない」
など、行方を追う調査では様々なケースがあります。
行方不明者が「どのような目的で」あなたの前から姿を消したのか、その調査から始まります。
何もできないと諦める前に、希望をもって当社にご相談ください。`,
    },
  ]
</script>


<template>
  <div class="text-5xl font-bold text-center mt-12 mb-6">
    調査項目
  </div>
  <div class="w-2/3 mx-auto mt-4">
    <div
      v-for="i in items"
      :key="i.title"
      :class="[i.bg, 'p-4 min-h-64']"
    >
      <div class="text-3xl font-bold">
        {{ i.title }}
      </div>
      <div class="grid grid-cols-3 gap-4 mt-2">
        <img
          width="200"
          class="text-center"
          src="https://picsum.photos/200"
        >
        <div class="col-span-2 whitespace-break-spaces text-md">
          {{ i.description }}
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>