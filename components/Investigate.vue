<script setup lang="ts">
  const description = `浮気や不倫の調査は、探偵事務所、興信所への依頼で最も多い事例となっています。
事実に直面することは心苦しいかもしれませんが、家族を守るのはあなた自身しかできません。
パートナーが怪しい行動をとっていても、確かな証拠がなければ彼らは言い逃れをすることができます。
しかし、証拠があれば浮気相手やパートナーに対して慰謝料を請求することが可能となります。
あなたが経験した辛さの代償は、きちんと請求するべきです。無理に耐える必要はありません。
自分自身と家族の未来のために、一歩を踏み出しましょう。
我々が、浮気や不倫のトラブル解決のお手伝いをします。`

const note1 = `・LINEのやりとり
・ホテルのレシート
・デートの写真
だけでは証拠として不十分です！`
const note2 = `浮気や不倫の証拠は積み重ねによって立証可能なケースが多く、一度きりのデートだけでは浮気、不倫を証明するのは難しいです。
だからこそ、証拠を確実に把握し、絶対に言い逃れできない状況を作ることが重要となります。`

const note3 = `当社はお客様の立場に立ち、関係の修復を望むのか、離婚を検討しているのか、その状況に応じてアドバイスを行います。
お客様からのご相談内容は秘密厳守としておりますので、安心してご相談ください。`
</script>

<template>
  <div class="container p-4">
    <h2 class="text-5xl font-bold text-center">
      浮気調査
    </h2>
    <NuxtImg src="images/investigate.png" />
    <div class="p-8 bg-primary">
      <div class="text-5xl font-bold text-white text-center">
        探偵社への依頼で最も多いのがこの浮気・不倫調査です
      </div>
      <div class="grid grid-cols-3 gap-3 mt-4">
        <div>image</div>
        <div class=" text-xl font-medium col-span-2 leading-loose">
          {{ description }}
        </div>
      </div>
    </div>

    <div class="relative">
      <NuxtImg
        class="absolute left-[calc(50%-220px)] top-[20%]"
        height="400"
        src="images/warn-sign.png"
      />
      <div class="text-4xl leading-loose whitespace-break-spaces py-7 font-medium">
        {{ note1 }}
        {{ note2 }}
      </div>
      <div class="text-3xl leading-loose border-4 p-4 border-red-300 font-medium">
        {{ note3 }}
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>