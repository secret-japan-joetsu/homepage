<script setup lang="ts">
const surveys = [
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
const flows = [
  {
    title: '1.お問い合わせ',
    bg: 'bg-green-100',
    image: '',
    description: `電話・LINE・メールのいずれかでお問い合わせください。内容については秘密厳守を徹底しております。新潟県長岡市を中心に全国対応しています。`,
  },
  {
    title: '2.面談、お見積り',
    bg: 'bg-amber-100',
    image: '',
    description: `個室のカフェ等で詳しい内容をお聞きします。全てのご相談は女性探偵が伺います。内容により、経費込み・追加料金なしの最適なプランでお見積もりを提出します。指定の場所までお伺いしますので、お気軽にお申し付けください。`,
  },
  {
    title: '3.契約、お支払方法確認',
    bg: 'bg-red-100',
    image: '',
    description: `お見積り内容を確認いただき、ご納得いただいた上での契約をお願いします。契約後は目的達成のため、共に戦いましょう。お支払いは銀行振込または現金払いからお選びいただけます。`,
  },
  {
    title: '4.下調べ、調査',
    bg: 'bg-red-100',
    image: '',
    description: `調査の精度を上げるため、しっかりと下調べを行います。準備が整い次第、調査、尾行を開始します。調査中の依頼者様の行動についても、適切なアドバイスを提供します。複数の調査員を動員する場合でも、追加料金は発生しません。。`,
  },
  {
    title: '5.中間報告',
    bg: 'bg-red-100',
    image: '',
    description: `調査の進行状況に応じて、中間報告を行います。依頼者様とのコミュニケーションを密に取り、連携を深めていきます。`,
  },
  {
    title: '6.報告書の提出',
    bg: 'bg-red-100',
    image: '',
    description: `確実な証拠を得て、詳細な報告書を作成し提出します。結果に基づき、裁判などの法的手段を取る際には、報告書があなたの強力な武器となります。その後の弁護士への相談同行など、アフターサービスも無料で提供しております。`,
  },
]



</script>


<template>
  <div
    id="survey"
    class="container p-4"
  >
    <div class="text-2xl md:text-6xl font-bold text-center mt-2 md:mt-6 mb-6">
      調査項目
    </div>
    <div class="md:w-2/3 mx-auto mt-4 grid grid-cols-1 gap-4">
      <div
        v-for="i in surveys"
        :key="i.title"
        :class="[i.bg, 'p-4 min-h-64']"
      >
        <div class="text-xl md:text-3xl font-bold">
          {{ i.title }}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <img
            class="w-full h-60 object-contain"
            src="https://picsum.photos/200"
          >
          <div class="col-span-2 whitespace-break-spaces text-md">
            {{ i.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="text-2xl md:text-6xl font-bold text-center mt-6 md:mt-12 mb-6">
      調査の流れ
    </div>
    <div class="md:w-2/3 mx-auto grid grid-cols-1">
      <div
        v-for="(f, index) in flows"
        :key="f.title"
        class="text-center"
      >
        <Collapsible
          v-slot="{ open }"
          class="bg-green-700 rounded-md"
        >
          <CollapsibleTrigger class="flex justify-between text-white w-full text-start p-4">
            {{ f.title }}
            <Icon
              :name="open ? 'ion:chevron-up' : 'ion:chevron-down'"
              size="1.5rem"
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div class="border-t pt-4 grid grid-cols-1 md:grid-cols-3 gap-y-4 mx-4 text-white">
              <img
                class="w-full h-60 object-cover"
                src="https://picsum.photos/200"
              >
              <div class="col-span-2 whitespace-break-spaces text-md text-start pb-4">
                {{ f.description }}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Icon
          v-if="index < flows.length - 1"
          :name="'ion:chevron-down'"
          size="2rem"
        />
      </div>
    </div>
  </div>
</template>


<style scoped></style>