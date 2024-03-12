<script setup lang="ts">

</script>


<template>
  <div
    id="faq"
    class="container md:w-2/3 mt-2 md:mt-6 p-4"
  >
    <div class="text-2xl md:text-5xl font-bold text-center">
      事務所概要
    </div>
    
    <img
      class="w-full object-contain h-[380px] md:h-[600px] my-4 md:my-10"
      src="https://picsum.photos/600"
    >

    <div class="mt-6 grid grid-cols-1 gap-y-4 whitespace-break-spaces text-md">
      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="font-bold md:font-normal text-xl md:text-md">
          事務所名
        </div>
        <div class="col-span-3">
          総合探偵社シークレットジャパン中越本部
        </div>
      </div>
      <div class="border border-slate-700" />
      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="font-bold md:font-normal text-xl md:text-md">
          住所
        </div>
        <div class="col-span-3">
          {{ '〒940-0041\n新潟県長岡市学校町３丁目' }}
        </div>
      </div>
      <div class="border border-slate-700" />
      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="font-bold md:font-normal text-xl md:text-md">
          電話番号
        </div>
        <div class="col-span-3">
          0120-519-773
        </div>
      </div>
      <div class="border border-slate-700" />
      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="font-bold md:font-normal text-xl md:text-md">
          届出
        </div>
        <div class="col-span-3">
          総合探偵社シークレットジャパン中越本部
        </div>
      </div>
      <div class="border border-slate-700" />
      <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="font-bold md:font-normal text-xl md:text-md">
          対応地域
        </div>
        <div class="col-span-3">
          {{ '新潟県内全域\n新潟市/長岡市/三条市/柏崎市/新発田市/小千谷市/加茂市/十日町市/見附市/\n村/上市/燕市/糸魚川市/妙高市/五泉市/上越市/阿賀野市/佐渡市/魚沼市/南魚\n沼市/胎内市/聖籠町/弥彦村/田上町/阿賀町/出雲崎町/湯沢町/津南町/刈羽村/\n関川村/粟島浦村' }}
        </div>
      </div>
      <div class="border border-slate-700" />
    </div>
  </div>
</template>


<style scoped>

</style>