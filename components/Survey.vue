<script setup lang="ts">
const surveys = [
  {
    title: '浮気・不倫調査',
    bg: 'bg-yellow-700',
    image: '/images/investigate/investigate-1.jpg',
    description: `探偵事務所に寄せられる相談で一番多いのがこの浮気・不倫調査。
まさか自分の夫・妻が・・・
もし浮気をしているなら、許してはいけません。
一人で抱え込む必要もありません。
浮気をしたパートナーや浮気相手に対して適切な対策を取るためにも、確実な証拠が必要不可欠です。`,
  },
  {
    title: '婚前調査',
    bg: 'bg-green-900',
    image: '/images/investigate/investigate-2.jpg',
    description: `結婚は人生の一大イベント。
絶対に失敗したくないからこそ、相手のことをちゃんと知り、信頼関係を築くことが大切です。
結婚してからギャンブル癖が発覚して離婚というケースもあります。これからの人生を安心して歩んでいくためにも、一度調査してみませんか？`,
  },
  {
    title: '行方調査',
    bg: 'bg-blue-900',
    image: '/images/investigate/investigate-3.jpg',
    description: `「お金を貸した相手が連絡が取れない」
「お世話になった人に感謝の言葉を伝えたい」
「家出して帰ってこない」
など、行方を追う調査では様々なケースがあります。
行方不明者が「どのような目的で」あなたの前から姿を消したのか、その調査から始まります。
何もできないと諦める前に、希望をもって当社にご相談ください。`,
  },
  {
    title: '素行調査',
    bg: 'bg-purple-800',
    image: '/images/investigate/investigate-4.jpg',
    description: `「お金を貸した相手が連絡が取れない」
「お世話になった人に感謝の言葉を伝えたい」
「家出して帰ってこない」
など、行方を追う調査では様々なケースがあります。
行方不明者が「どのような目的で」あなたの前から姿を消したのか、その調査から始まります。
何もできないと諦める前に、希望をもって当社にご相談ください。`,
  },
  {
    title: 'いじめ調査',
    bg: 'bg-pink-900',
    image: '/images/investigate/investigate-5.jpg',
    description: `「お金を貸した相手が連絡が取れない」
「お世話になった人に感謝の言葉を伝えたい」
「家出して帰ってこない」
など、行方を追う調査では様々なケースがあります。
行方不明者が「どのような目的で」あなたの前から姿を消したのか、その調査から始まります。
何もできないと諦める前に、希望をもって当社にご相談ください。`,
  },
  {
    title: 'ストーカー調査',
    bg: 'bg-cyan-800',
    image: '/images/investigate/investigate-6.jpg',
    description: `「お金を貸した相手が連絡が取れない」
「お世話になった人に感謝の言葉を伝えたい」
「家出して帰ってこない」
など、行方を追う調査では様々なケースがあります。
行方不明者が「どのような目的で」あなたの前から姿を消したのか、その調査から始まります。
何もできないと諦める前に、希望をもって当社にご相談ください。`,
  },
  {
    title: '盗聴器探査調査',
    bg: 'bg-rose-300',
    image: '/images/investigate/investigate-7.jpg',
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
  <div
    id="survey"
    class="bg-[#F7F7F7] scroll-mt-16 lg:scroll-mt-24"
  >
    <div class="container p-4">
      <div class="text-2xl lg:text-6xl font-bold text-center mt-2 lg:mt-6 mb-6">
        調査項目
      </div>
      <div class="mx-auto mt-4 grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-8">
        <div
          v-for="i in surveys"
          :key="i.title"
          class="min-h-64 bg-white"
        > 
          <div :class="['text-xl lg:text-3xl font-bold text-white px-2 py-2 flex items-center', i.bg]">
            <img
              src="/images/investigate/search.svg"
              class="text-white h-10 w-10 mr-2"
            >
            {{ i.title }}
          </div>
          <div class="grid grid-cols-1 gap-2 p-4">
            <img
              class="w-full h-52 object-cover mx-auto"
              :src="i.image"
            >
            <div class="whitespace-break-spaces text-lg">
              {{ i.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped></style>