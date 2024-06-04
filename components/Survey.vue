<script setup lang="ts">
const surveys = [
  {
    title: '浮気・不倫調査',
    bg: 'bg-yellow-700',
    image: '/images/investigate/investigate-1.jpg',
    description: `探偵事務所に寄せられる相談で一番多いのがこの浮気・不倫調査。確証が持てなくても大丈夫。怪しいとに感じたらすぐご連絡ください。事実確認のための調査も受け付けております。`,
  },
  {
    title: '婚前調査',
    bg: 'bg-green-900',
    image: '/images/investigate/investigate-2.jpg',
    description: `将来の配偶者やパートナーの様子がおかしいと感じたらその怪しい行動には必ず理由があります。まずは、あなたのお悩みをお聞かせください。`,
  },
  {
    title: '行方調査',
    bg: 'bg-blue-900',
    image: '/images/investigate/investigate-3.jpg',
    description: `家出をした息子を探したい。お金を貸した友人と連絡が取れない我々は行方調査や人探しの専門家です。まずは、あなたのご相談をお聞かせください。`,
  },
  {
    title: '素行調査',
    bg: 'bg-purple-800',
    image: '/images/investigate/investigate-4.jpg',
    description: `離れて暮らす息子の様子を知りたい夫が浮気ではないが、隠し事をしている不自然な行動の背後には常に何かしらの理由が隠されています。まずは、あなたのお悩みをお聞かせください。`,
  },
  {
    title: 'いじめ調査',
    bg: 'bg-pink-900',
    image: '/images/investigate/investigate-5.jpg',
    description: `子供の元気がなくなった。敷地内にゴミを散らかされるSNS全盛の現代、教師がいじめに全く気づいていないなんてことも珍しくはありません。私たち探偵が原因となる証拠を掴み、解決に導きます。`,
  },
  {
    title: 'ストーカー調査',
    bg: 'bg-cyan-800',
    image: '/images/investigate/investigate-6.jpg',
    description: `自宅や職場の近くで頻繁に見かける人がいる。一方的にしつこく連絡をしてくる人がいる。全く知らない人から荷物や手紙が届く。怖い思いをさせているストーカーから、あなたを守ります。`,
  },
  {
    title: '盗聴器探査調査',
    bg: 'bg-rose-300',
    image: '/images/investigate/investigate-7.jpg',
    description: `他人は知らないはずの会話を何故か知っている。電話で不自然なノイズ音がする。もしかしたら盗聴器が仕掛けられているかも。私たち探偵が盗聴器を発見し安全を守ります。`,
  },
  {
    title: "従業員素行調査",
    bg: "bg-yellow-400",
    image: "/images/investigate/investigate-8.jpg",
    description: `外回り中に業務を放棄しパチンコに行っている、競合他社への情報流出や商品の横領など、社員が業務をしっかり遂行しているか確認いたします。`,
  },
]


</script>


<template>
  <div
    id="survey"
    class="bg-[#F7F7F7] scroll-mt-16 lg:scroll-mt-24"
  >
    <div class="container p-4">
      <div class="text-2xl lg:text-5xl font-bold text-center mt-2 lg:mt-6 mb-6">
        調査項目
      </div>
      <div class="mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
        <div
          v-for="i in surveys"
          :key="i.title"
          class="min-h-64 bg-white shadow-lg"
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