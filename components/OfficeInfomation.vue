<script setup lang="ts">

</script>


<template>
  <div
    id="office"
    class="container lg:w-2/3 mt-2 lg:mt-6 p-4 lg:scroll-mt-24 scroll-mt-16"
  >
    <div class="text-2xl lg:text-5xl font-bold text-center">
      事務所概要
    </div>
    
    <img
      class="w-full object-contain w-full my-4 lg:my-10"
      src="/images/office_img.jpg"
    >

    <div class="mt-6 grid grid-cols-1 gap-y-4 whitespace-break-spaces text-md">
      <div class="grid grid-cols-1 lg:grid-cols-4">
        <div class="font-bold lg:font-normal text-xl lg:text-md">
          事務所名
        </div>
        <div class="col-span-3">
          シークレットジャパン上越・柏崎本部
        </div>
      </div>
      <div class="border border-slate-700" />
      <div class="grid grid-cols-1 lg:grid-cols-4">
        <div class="font-bold lg:font-normal text-xl lg:text-md">
          住所
        </div>
        <div class="col-span-3">
          {{ '〒945-0047\n新潟県柏崎市比角' }}
        </div>
      </div>
      <div class="border border-slate-700" />
      <!-- <div class="grid grid-cols-1 lg:grid-cols-4">
        <div class="font-bold lg:font-normal text-xl lg:text-md">
          電話番号
        </div>
        <div class="col-span-3">
          0120-519-773
        </div>
      </div> -->
      <!-- <div class="border border-slate-700" /> -->
      <div class="grid grid-cols-1 lg:grid-cols-4">
        <div class="font-bold lg:font-normal text-xl lg:text-md">
          届出
        </div>
        <div class="col-span-3">
          新潟県公安委員会 第46240005号
        </div>
      </div>
      <div class="border border-slate-700" />
      <div class="grid grid-cols-1 lg:grid-cols-4">
        <div class="font-bold lg:font-normal text-xl lg:text-md">
          対応地域
        </div>
        <div class="col-span-3">
          {{ '対応地域 \n新潟県内全域\n新潟市/長岡市/三条市/柏崎市/新発田市/小千谷市/加茂市/十日町市/見附市/村/上市/燕市/糸魚川市/妙高市/五泉市/上越市/阿賀野市/佐渡市/魚沼市/南魚沼市/胎内市/聖籠町/弥彦村/田上町/阿賀町/出雲崎町/湯沢町/津南町/刈羽村/関川村/粟島浦村' }}
        </div>
      </div>
      <div class="border border-slate-700" />
    </div>
  </div>
</template>


<style scoped>

</style>