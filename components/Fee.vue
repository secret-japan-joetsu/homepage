<script setup lang="ts">
const cost = [
  {
    text: '安易な価格表示は致しません',
    cost: true,
    color: 'border-red-600'
  },
  {
    text: '無駄な費用は不要です',
    cost: true,
    color: 'border-red-600'
  },
  {
    text: '追加の費用・経費は頂きません。',
    cost: true,
    color: 'border-red-600'
  },
  {
    text: '案件毎の見積りで安心です',
    cost: false,
    color: 'border-blue-600'
  },
]

const content = `当社では安易な価格表示は行っておりません。本来調査とは、内容・期間・地域・難易度等によって変動するものです。当社では案件ごとに適正価格でのお見積りを提出し、徹底的に無駄な経費を省いています。だからこそ、グループ全体で業界最安値を実現しています。また、安かろう悪かろうの仕事をするつもりもありません。金額の大小に関わらず、常に正確な調査を実施いたします。お見積りをご希望の方は、一度お問い合わせください。`


const table = [
  {
    rowTitle: '調査\n時間',
    main: '1日(基本）',
    a: '1日（3時間迄）',
    b: '1日（3時間迄）'
  },
  {
    rowTitle: '調査\n費用',
    main: '￥100,000',
    a: '￥80,0000',
    b: '￥70,000'
  },
  {
    rowTitle: '基本\n料金',
    main: '込み',
    a: '￥40,000',
    b: '￥40,000'
  },
  {
    rowTitle: '経費',
    main: '込み',
    a: '込み',
    b: '込み'
  },
  {
    rowTitle: '交通費',
    main: '込み',
    a: '込み',
    b: '込み'
  },
  {
    rowTitle: 'その他\n諸経費',
    main: '込み',
    a: '込み',
    b: '込み'
  },
  {
    rowTitle: '成功\n報酬',
    main: '込み',
    a: '50%',
    b: '込み'
  },
  {
    rowTitle: '後日\n精算額',
    main: '込み',
    a: '50%',
    b: '込み'
  },
  {
    rowTitle: '総額',
    main: '¥ 100,000',
    a: '￥165,000',
    b: '￥120,000'
  },
]
</script>

<template>
  <div
    id="fee"
    class="w-full bg-primary p-4 mt-4 lg:mt-12 scroll-mt-16 lg:scroll-mt-24"
  >
    <div class="text-3xl lg:text-5xl text-center font-bold lg:my-4">
      料金システム
    </div>
    <div class=" text-center text-3xl my-6 w-full lg:w-2/3 mx-auto font-bold">
      <span class="border-b-[10px] border-[#FDFE53] leading-relaxed">
        シークレットジャパン中越本部はここが違う
      </span>
    </div>
    <div class="gap-4 p-0 container sm:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4"> 
        <div
          v-for="i in cost"
          :key="i.text"
          :class="['border-[6px] rounded-md bg-white p-2 flex items-center gap-2', i.color]"
        >
          <Icon
            :name="i.cost ? 'maki:cross' : 'mdi:checkbox-blank-circle-outline'"
            size="3.5em"
            :color="i.cost ? 'red': 'blue'"
          />
          <div class="text-xl xl:text-2xl font-bold text-center">
            {{ i.text }}
          </div>
        </div>
      </div>

      <div class=" text-center text-3xl my-6 mx-auto font-bold ">
        <span class="border-b-[10px] border-[#FDFE53] whitespace-break-spaces lg:whitespace-normal leading-relaxed">
          {{ '案件毎に価格を提示させて\nいただきます' }}
        </span>
      </div>

      <div class="text-xl lg:text-2xl font-bold whitespace-break-spaces">
        {{ content }}
      </div>

      <div class="text-3xl lg:text-5xl text-center font-bold  mt-4 lg:mt-10">
        他社との比較例
      </div>
      <div class="overflow-x-auto">
        <table
          class="table-fixed text-sm lg:text-xl text-center w-full bg-white whitespace-break-spaces mt-6 border-collapse border border-slate-400"
        >
          <thead>
            <tr>
              <th class="border border-slate-400 w-[20%]" />
              <th class="border border-slate-400 bg-green-700 text-white p-3">
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
              <td class="border border-slate-400 bg-green-100 font-bold text-center">
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
      <div class="border-[6px] rounded-md bg-white p-3 text-xl font-bold text-center  border-red-500 text-red-500 my-4">
        内容・金額にご納得いただけない場合、遠慮なくお断りください
      </div>
      <div class="text-center">
        <Button
          size="lg"
          class="bg-green-500 rounded-full shadow-xl text-2xl h-14 font-bold lg:px-32"
        >
          <img
            class="object-contain h-12"
            src="/images/LINE_Brand_icon.png"
          >
          無料相談受付中
        </Button>
      </div>
    </div>
  </div>
</template>


<style scoped></style>