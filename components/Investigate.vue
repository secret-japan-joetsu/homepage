<script setup lang="ts">
  const description = `パートナーの浮気で、お悩みの方は決して少なくありません
1人で悩んでいる方、
話し合いの糸口がつかめないで諦めている方、
勇気を出して話し合っても、はぐらかされて一向に解決しない方など、
多くの方が心のモヤモヤを解消できずに悩んでおられます
パートナーしっかり認めさせ、事実を明らかにする為には、言い訳の出来ない確たる証拠が必要です
自分自身や家族の未来のために、一歩を踏み出しましょう
我々が浮気や不倫のトラブル解決のお手伝いをします`

const note1 = `・LINEのやりとり
・ホテルのレシート
・デートの写真
だけでは証拠として不十分です！`

const note2= `当社はお客様の立場に立ち、関係の修復を望むのか、離婚を検討しているのか、その状況に応じてアドバイスを行います。
お客様からのご相談内容は秘密厳守としておりますので、安心してご相談ください。`
</script>

<template>
  <div
    id="investigate"
    class="bg-primary scroll-mt-16 lg:scroll-mt-24"
  >
    <div class="p-8 container">
      <h2 class="text-2xl lg:text-5xl font-bold text-center">
        浮気・不倫調査
      </h2>
      <div class="grid grid-cols-1 gap-y-6 mt-4">   
        <div class="text-xl lg:text-3xl font-bold text-center">
          探偵社への依頼で最も多いのがこの浮気・不倫調査です
        </div>
        <div class="xl:w-[60%] lg:w-[90%] w-full mx-auto text-lg col-span-2 leading-relaxed lg:leading-loose whitespace-break-spaces">
          {{ description }}
        </div>
      </div>
      <div class="xl:w-[60%] lg:w-[90%] w-full mx-auto">
        <div class="bg-[#FFF7BE] mt-6 lg:mt-12 py-2 lg:py-6 px-4 lg:px-10 w-full mx-auto rounded-lg">
          <div class="text-2xl lg:text-5xl font-bold justify-center items-center flex gap-2">
            <Icon
              name="noto-v1:warning"
              class="text-2xl lg:text-6xl "
            />
            注意
          </div>
          <div class="text-lg whitespace-break-spaces pt-2 lg:pt-10 w-full lg:w-2/4 mx-auto font-bold">
            {{ note1 }}
          </div>
          <div class="text-lg whitespace-break-spaces pt-2 lg:pt-10 font-bold">
            {{ "浮気や不倫の証拠は積み重ねによって立証可能なケースが多く、一度きりのデートだけでは浮気、不倫を証明するのは難しいです。\nだからこそ、" }}<strong>{{ "プロの手により" }}</strong>{{ "証拠を確実に把握し、絶対に言い逃れできない状況を作る事が重要です。" }}
          </div>
        </div>
        <div class="text-lg border-4 p-4 lg:p-6 border-red-500 font-bold bg-white mt-6 lg:mt-10 whitespace-break-spaces rounded-lg">
          {{ note2 }}
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>