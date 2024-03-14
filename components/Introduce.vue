<script setup lang="ts">
  const description = "最近パートナーの行動が怪しい。気になるけど、気付かれたくない。どうすればいいかわからない。\nそう感じることはありませんか？\n一人で悩む必要はありません。一人で出来ないことがあるからこそ、私たちプロがいます。\n調査の結果次第で今後どうするかを選ぶのもまた、あなた次第です。\n私たちはそんなあなたと一緒に戦う仲間でありたいと思っています。"
</script>

<template>
  <div
    id="introduce"
    class="w-full relative h-[42svh] lg:h-[calc(80svh)] bg-[url('/images/TOP/hero-image.jpg')] bg-no-repeat bg-cover flex justify-center items-center"
  >
    <div class="bg-black/50 p-2 lg:p-10 mt-16 lg:mt-24 backdrop-brightness-100">
      <h2 class="text-xl lg:text-7xl font-bold text-center text-primary">
        新潟県内の調査はお任せください
      </h2>
      <div class="text-lg lg:text-5xl leading-tight lg:leading-normal text-white font-bold text-center mt-2 lg:mt-10 whitespace-break-spaces">
        {{
          "あなたに合った最適プランで \n納得の結果をお出しします\nご相談だけでもOK！\nお気軽にお問い合わせください"
        }}
      </div>
    </div>
  </div>
  <div class="container grid grid-cols-1 gap-6 my-8 justify-center items-center">
    <div class="lg:w-1/2 mx-auto">
      <div class="text-xl lg:text-5xl font-bold text-accent">
        プロに依頼するという選択肢
      </div>
      <div class="lg:text-xl lg:leading-loose whitespace-break-spaces font-bold mt-3">
        {{ description }}
      </div>
    </div>
  </div>
</template>



<style scoped></style>