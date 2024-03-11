<script setup lang="ts">
  const description = "最近パートナーの行動が怪しい。気になるけど、気付かれたくない。どうすればいいかわからない。\nそう感じることはありませんか？\n一人で悩む必要はありません。一人で出来ないことがあるからこそ、私たちプロがいます。\n調査の結果次第で今後どうするかを選ぶのもまた、あなた次第です。\n私たちはそんなあなたと一緒に戦う仲間でありたいと思っています。"
</script>

<template>
  <div
    id="introduce"
    class="w-full bg-primary p-8 mx-auto"
  >
    <h2 class="text-2xl md:text-5xl font-bold text-center">
      新潟県内の調査はお任せください
    </h2>
    <div class="text-xl md:text-3xl leading-relaxed text-white font-medium text-center pt-3 whitespace-break-spaces">
      {{
        "あなたに合った最適プランで \n納得の結果をお出しします\nご相談だけでもOK！\nお気軽にお問い合わせください"
      }}
    </div>
  </div>
  <div class="container grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6">
      <img
        class="w-full"
        src="https://picsum.photos/200"
      >
    </div>
    <div class="col-span-2">
      <div class="text-2xl md:text-5xl font-bold text-accent">
        プロに依頼するという選択肢
      </div>
      <div class="md:text-xl md:leading-loose whitespace-break-spaces font-medium mt-3">
        {{ description }}
      </div>
    </div>
  </div>
</template>



<style scoped></style>