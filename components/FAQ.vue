<script setup lang="ts">
  const questions = [
    {
      question: '調査費用はいくらですか？',
      answer: '調査費用は、調査の種類や調査期間によって異なります。\nシークレットジャパン中越本部はお客様のお悩みに合わせて最適な料金を掲示しています。'
    },
    {
      question: '調査期間はどのくらいですか？',
      answer: '調査の種類や調査期間によって異なります。\n一般的に、調査期間は数日間から数週間程度です。\n浮気調査などで予め怪しい日が特定できているのであれば、ピンポイントで1日だけ調査することも可能です。'
    },
    {
      question: '探偵に依頼するにはどのような場合が適していますか？',
      answer: '探偵に依頼するのは、浮気調査や人探し、身辺調査など、自分自身で調べることが難しい問題を解決するために適しています。\n具体的には、浮気や不倫の調査、盗聴器の発見、素行調査の調査などがあります。'
    },
    {
      question: '証拠を入手するためにどのような手段を使いますか？',
      answer: '身辺調査や監視、証言の収集、カメラやGPSを使った追跡など、多様な手段を使って証拠を収集します。\nただし、法律に反する手段を使って証拠を収集することはできません。'
    },
    {
      question: '調査結果は裁判で使用できますか？',
      answer: '探偵が収集した証拠は、法律に則って取得された場合、裁判で使用することができます。\n違法に取得された証拠は裁判で使用することができません。'
    },
  ]
</script>


<template>
  <div
    id="faq"
    class="container md:w-2/3 mt-2 md:mt-6 p-4"
  >
    <div class="text-3xl md:text-5xl font-bold text-center">
      よくある質問
    </div>
    <div class="grid grid-cols-1 gap-5 mt-2 md:mt-6">
      <Collapsible
        v-for="(q,index) in questions"
        :key="q.question"
        v-slot="{ open }" 
        class="grid grid-cols-1 divide-y-2 divide-black"
      >
        <CollapsibleTrigger class="flex justify-between items-center text-start pb-2 gap-4">
          <div class="font-bold pt-2 flex gap-2 md:gap-4 items-center">
            <div class=" text-xl">
              {{ `Q${index+1}.` }}
            </div>
            <div class="text-xl font-bold">
              {{ q.question }}
            </div>
          </div>
          <div>
            <Icon
              size="2em"
              :name="open ? 'ion:chevron-up' : 'ion:chevron-down'"
            />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div class="pt-2 flex gap-4">
            <div class="font-bold text-xl md:text-2xl">
              {{ `A${index+1}.` }}
            </div>
            <div class="text-md md:text-lg">
              {{ q.answer }}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
</template>


<style scoped>

</style>