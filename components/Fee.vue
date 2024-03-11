
<script setup lang="ts">
  const cost = [
    {
      text: '安易な価格表示は致しません',
      image: '/images/no-cost.png',
      color: 'border-red-600'
    },
    {
      text: '無駄な費用は不要です',
      image: '/images/no-cost.png',
      color: 'border-red-600'
    },
    {
      text: '追加の費用・経費は頂きません。',
      image: '/images/no-cost.png',
      color: 'border-red-600'
    },
    {
      text: '案件毎の見積りで安心です',
      image: '/images/cost.png',
      color: 'border-blue-600'
    },
  ]

  const content = `当社では安易な価格表示は行っておりません。
本来調査とは、内容・期間・地域・難易度等によって変動するものです。
当社では案件ごとに適正価格でのお見積りを提出し、徹底的に無駄な経費を省いています。
だからこそ、グループ全体で業界最安値を実現しています。また、安かろう悪かろうの仕事をするつもりもありません。金額の大小に関わらず、常に正確な調査を実施いたします。
お見積りをご希望の方は、一度お問い合わせください。`


const table = [
  {
    rowTitle : '調査\n時間',
    main: '1日(基本）',
    a: '1日（3時間迄）',
    b: '1日（3時間迄）'
  },
  {
    rowTitle : '調査\n費用',
    main: '￥100,000',
    a: '￥80,0000',
    b: '￥70,000'
  },
  {
    rowTitle : '基本\n料金',
    main: '込み',
    a: '￥40,000',
    b: '￥40,000'
  },
  {
    rowTitle : '経費',
    main: '込み',
    a: '込み',
    b: '込み'
  },
  {
    rowTitle : '交通費',
    main: '込み',
    a: '込み',
    b: '込み'
  },
  {
    rowTitle : 'その他\n諸経費',
    main: '込み',
    a: '込み',
    b: '込み'
  },
  {
    rowTitle : '成功\n報酬',
    main: '込み',
    a: '50%',
    b: '込み'
  },
  {
    rowTitle : '後日\n精算額',
    main: '込み',
    a: '50%',
    b: '込み'
  },
  {
    rowTitle : '総額',
    main: '込み',
    a: '￥165,000',
    b: '￥120,000'
  },
]
</script>

<template>
  <div
    id="fee"
    class="w-full bg-primary p-4 mt-12"
  >
    <div class="text-3xl md:text-5xl text-center font-bold my-4">
      料金システム
    </div>
    <div class="text-center text-xl my-6 md:w-3/12 mx-auto font-bold">
      <div class="border-b-8 -mb-3 border-[#FDFE53]" />
      シークレットジャパン中越本部はここが違う
    </div>
    <div class="container p-0 md:w-3/5">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 justify-center">
        <div
          v-for="i in cost"
          :key="i.text"
        >
          <div class="bg-pink-100 mx-auto max-w-48 h-48 md:max-w-60 md:h-60 p-4 md:p-2">
            <img
              class="object-cover"
              :src="i.image"
            >
          </div>
          <div :class="['border-[6px] rounded-md bg-white p-2 mt-4 min-h-20 text-xl font-bold text-center my-auto', i.color]">
            {{ i.text }}
          </div>
        </div>
      </div>

      <div class="text-center text-xl my-8 mx-auto font-bold">
        <div class="border-b-8 -mb-3 border-[#FDFE53]" />
        案件毎に価格を提示させていただきます
      </div>
      <div class="text-xl font-bold whitespace-break-spaces leading-relaxed">
        {{ content }}
      </div>

      <div class="text-3xl md:text-5xl text-center font-bold text-white mt-10">
        他社との比較例
      </div>
      <div class="overflow-x-auto">
        <table class="table-fixed text-xl text-center min-w-[800px] w-full bg-white whitespace-break-spaces mt-6 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th class="border border-slate-400 w-[20%]" />
              <th class="border border-slate-400 bg-red-300 text-white p-3">
                {{ 'シークレット\nジャパン\n中越本部' }}
              </th>
              <th class="border border-slate-400">
                A社
              </th>
              <th class="border border-slate-400">
                B社
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="r in table "
              :key="r.rowTitle"
            >
              <td class="border border-slate-400 h-16">
                {{ r.rowTitle }}
              </td>
              <td class="border border-slate-400 bg-red-50 font-bold text-center">
                {{ r.main }}
              </td>
              <td class="border border-slate-400">
                {{ r.a }}
              </td>
              <td class="border border-slate-400">
                {{ r.b }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="border-[6px] rounded-md bg-white p-3 text-xl font-bold text-center my-auto border-red-500 text-red-500 mb-6">
        内容・金額にご納得いただけない場合、遠慮なくお断りください
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>