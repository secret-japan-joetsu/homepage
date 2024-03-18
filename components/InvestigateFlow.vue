<script setup lang="ts">
const flows = [
  {
    title: '1.お問い合わせ',
    bg: 'bg-green-100',
    image: '/images/investigate-flow/apple-1839873.jpg',
    description: `電話・LINE・メールのいずれかでお問い合わせください。内容については秘密厳守を徹底しております。新潟県長岡市を中心に全国対応しています。`,
  },
  {
    title: '2.面談、お見積り',
    bg: 'bg-amber-100',
    image: '/images/investigate-flow/calculator-385506.jpg',
    description: `個室のカフェ等で詳しい内容をお聞きします。全てのご相談は女性探偵が伺います。内容により、経費込み・追加料金なしの最適なプランでお見積もりを提出します。指定の場所までお伺いしますので、お気軽にお申し付けください。`,
  },
  {
    title: '3.契約、お支払方法確認',
    bg: 'bg-red-100',
    image: '/images/investigate-flow/business-deal-7954355.jpg',
    description: `お見積り内容を確認いただき、ご納得いただいた上での契約をお願いします。契約後は目的達成のため、共に戦いましょう。お支払いは銀行振込または現金払いからお選びいただけます。`,
  },
  {
    title: '4.下調べ、調査',
    bg: 'bg-red-100',
    image: '/images/investigate-flow/research-390297.jpg',
    description: `調査の精度を上げるため、しっかりと下調べを行います。準備が整い次第、調査、尾行を開始します。調査中の依頼者様の行動についても、適切なアドバイスを提供します。複数の調査員を動員する場合でも、追加料金は発生しません。。`,
  },
  {
    title: '5.中間報告',
    bg: 'bg-red-100',
    image: '/images/investigate-flow/analysis-1841158.jpg',
    description: `調査の進行状況に応じて、中間報告を行います。依頼者様とのコミュニケーションを密に取り、連携を深めていきます。`,
  },
  {
    title: '6.報告書の提出',
    bg: 'bg-red-100',
    image: '/images/investigate-flow/financial-3521844.jpg',
    description: `確実な証拠を得て、詳細な報告書を作成し提出します。結果に基づき、裁判などの法的手段を取る際には、報告書があなたの強力な武器となります。その後の弁護士への相談同行など、アフターサービスも無料で提供しております。`,
  },
]

</script>


<template>
  <div
    class="container p-4"
  >
    <div class="text-2xl lg:text-6xl font-bold text-center mt-6 lg:mt-12 mb-6">
      調査の流れ
    </div>
    <div class="lg:w-2/3 mx-auto grid grid-cols-1">
      <div
        v-for="(f, index) in flows"
        :key="f.title"
        class="text-center"
      >
        <Collapsible
          v-slot="{ open }"
          class="bg-green-700 rounded-md"
        >
          <CollapsibleTrigger class="flex justify-between text-white text-2xl font-bold w-full text-start p-4 items-center">
            {{ f.title }}
            <Icon
              :name="open ? 'ion:chevron-up' : 'ion:chevron-down'"
              size="1.5rem"
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div class="border-t-[3px] border-white pt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 pb-4 text-white">
              <img
                class="w-full h-40 object-cover lg:order-last"
                :src="f.image"
              >
              <div class="col-span-2 whitespace-break-spaces text-xl text-start">
                {{ f.description }}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Icon
          v-if="index < flows.length - 1"
          :name="'ion:arrow-down'"
          size="3rem"
        />
      </div>
    </div>
  </div>
</template>


<style scoped></style>