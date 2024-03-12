<script setup lang="ts">
  const description = "最近パートナーの行動が怪しい。気になるけど、気付かれたくない。どうすればいいかわからない。\nそう感じることはありませんか？\n一人で悩む必要はありません。一人で出来ないことがあるからこそ、私たちプロがいます。\n調査の結果次第で今後どうするかを選ぶのもまた、あなた次第です。\n私たちはそんなあなたと一緒に戦う仲間でありたいと思っています。"
</script>

<template>
  <div
    id="introduce"
    class="w-full relative h-[35svh] md:h-[calc(100svh-6rem)] bg-[url('https://picsum.photos/600')] bg-no-repeat bg-cover flex justify-center items-center"
  >
    <div class="bg-black/50 p-2 md:p-10">
      <h2 class="text-2xl md:text-7xl font-bold text-center text-primary">
        新潟県内の調査はお任せください
      </h2>
      <div class="text-xl md:text-5xl md:leading-relaxed text-white font-bold text-center mt-2 md:mt-10 whitespace-break-spaces">
        {{
          "あなたに合った最適プランで \n納得の結果をお出しします\nご相談だけでもOK！\nお気軽にお問い合わせください"
        }}
      </div>
    </div>
  </div>
  <div class="container grid grid-cols-1 gap-6 my-8 justify-center items-center">
    <div class="md:w-1/2 mx-auto">
      <div class="text-2xl md:text-5xl font-bold text-accent">
        プロに依頼するという選択肢
      </div>
      <div class="md:text-xl md:leading-loose whitespace-break-spaces font-bold mt-3">
        {{ description }}
      </div>
    </div>
  </div>
</template>



<style scoped></style>