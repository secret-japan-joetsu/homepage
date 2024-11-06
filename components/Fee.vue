<script setup lang="ts">
const cost = [
  {
    text: '追加の費用・経費は頂きません',
    cost: false,
    color: 'border-blue-600'
  },
  {
    text: '調査員の増員は無料です',
    cost: false,
    color: 'border-blue-600'
  },
  {
    text: '相談・面談何度でも無料です',
    cost: false,
    color: 'border-blue-600'
  },
  {
    text: 'あなただけの最適プランを用意します',
    cost: false,
    color: 'border-blue-600'
  },
]

const content = `探偵の調査は、内容・期間・地域・難易度等によって変動するものです。当社では案件ごとに適正価格でのお見積りを出し、徹底的に無駄な経費を省いています。だからこそ、グループ全体で業界最安値を実現しています。また、安かろう悪かろうの仕事は致しません。金額の大小に関わらず、常に正確な調査を実施いたします。お見積りをご希望の方は、一度お問い合わせください。`


const table = [
  {
    rowTitle: '調査\n時間',
    main: '1日(基本)',
    a: '1日(3時間迄)',
    b: '1日(3時間迄)'
  },
  {
    rowTitle: '調査\n費用',
    main: '￥100,000',
    a: '￥80,000',
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
    main: '¥100,000',
    bold: true,
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
        シークレットジャパン上越・柏崎はここが違う
      </span>
    </div>
    <div class="gap-4 p-0 container sm:w-[85%] md:w-[80%] xl:w-[70%] 2xl:w-[65%] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4"> 
        <div
          v-for="i in cost"
          :key="i.text"
          :class="['border-[6px] rounded-md bg-white p-2 flex items-center gap-2', i.color]"
        >
          <Icon
            :name="i.cost ? 'maki:cross' : 'mdi:checkbox-blank-circle-outline'"
            size="3.5em"
            class="w-15"
            :color="i.cost ? 'red': 'blue'"
          />
          <div class="text-xl xl:text-2xl font-bold text-left">
            {{ i.text }}
          </div>
        </div>
      </div>

      <!-- <div class=" text-center text-3xl my-6 mx-auto font-bold ">
        <span class="border-b-[10px] border-[#FDFE53] whitespace-break-spaces lg:whitespace-normal leading-relaxed">
          {{ '案件毎に価格を提示させて\nいただきます' }}
        </span>
      </div> -->

      <div class="text-lg font-bold my-6 whitespace-break-spaces">
        {{ content }}
      </div>

      <div class="text-3xl lg:text-5xl text-center font-bold  mt-4 lg:mt-10">
        他社との比較例
      </div>

      <table
        class="table-fixed text-sm lg:text-xl text-center w-full bg-white whitespace-break-spaces mt-6 border-collapse border border-slate-400"
      >
        <thead>
          <tr>
            <th class="border border-slate-400 w-[16%]" />
            <th class="border border-slate-400 bg-green-700 text-white p-3 w-[30%]">
              {{ 'シークレット\nジャパン\n上越・柏崎' }}
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
            <td :class="['border border-slate-400 bg-green-100 text-center', r.bold ? 'font-black ring-4 ring-green-600 ring-inset' : 'font-bold']">
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

      <div class="border-[6px] rounded-md bg-white p-3 text-xl font-bold text-center  border-red-500 text-red-500 my-4 whitespace-break-spaces">
        {{ "内容・金額にご納得いただけない場合、遠慮なくお断りください。\n以後こちらから営業等のご連絡は一切行いません。" }}
      </div>
      <div class="flex flex-wrap sm:flex-nowrap gap-4 justify-center">
        <Button
          size="lg"
          as-child
          class="bg-[#484848] rounded-full shadow-xl text-2xl h-14 font-bold lg:px-32 w-full"
        >
          <a
            href="tel:07069799272"
            target="_blank"
          >
            <Icon
              name="material-symbols:phone-in-talk-watchface-indicator"
              size="1.5rem"
              class="mr-2"
            />
            電話で無料相談
          </a>
        </Button>
        <Button
          size="lg"
          as-child
          class="bg-green-500 rounded-full shadow-xl text-2xl h-14 font-bold lg:px-32 w-full"
        >
          <a
            href="https://lin.ee/HqEAKtY"
            target="_blank"
          >
            <img
              class="object-contain h-12"
              src="/images/LINE_Brand_icon.png"
            >
            無料相談受付中
          </a>
        </Button>
      </div>
    </div>
  </div>
</template>


<style scoped></style>