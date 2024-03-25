<script setup lang="ts">
  const questions = [
    {
      question: '依頼する前に、自分で調査することはできますか？',
      answer: 'ご依頼いただく前にご自分で調査をされてしまうと、お相手にバレてしまい警戒されてしまう可能性があります。\nその後、探偵に依頼していただいても警戒されている状態だと成功率が下がってしまいます。\nまた、プロの探偵にお任せいただければ裁判で確実に使える証拠を掴むことが出来ます。'
    },
    {
      question: '調査費用や期間はどのくらいですか？',
      answer: '調査の種類や調査期間によって異なります。 一般的に、調査期間は数日間から数週間程度です。 \n見積もり、相談料は無料になりますので、まずはお気軽にお問い合わせください。'
    },
    {
      question: '探偵に依頼するメリットは何ですか？',
      answer: 'ライバシーの侵害や法律違反になることがなく、迅速に証拠を掴むことができます。\nまた、自分自身で調べることが難しい問題を、解決することができます。'
    },
    {
      question: '他社と比較した上で依頼をするか検討したいのですが、その場で契約をしなければいけないのでしょうか？相談に行ったら強引に契約させられないか不安です。',
      answer: '契約の強制等は一切ございません。ご納得頂くまで検討して頂き、ご依頼頂けましたらと思います。\n契約に至らなかった場合でも、その後の勧誘、営業等は一切行いません。'
    },
    {
      question: '調査の延長や中止は可能なのでしょうか？',
      answer: '可能です。\n調査の延長や追加のご希望がございましたらご依頼者様とご相談の上、柔軟に対応させていただきます。\n勝手な判断で断りなく延長や追加の調査を行ったりなどは一切ございませんのでご安心ください。\nなお、契約書にも明記してございますが、調査中止をご希望の場合は、状況によってはキャンセル料が発生してしまいますので、あらかじめご了承くださいませ。'
    },
  ]
</script>


<template>
  <div
    id="faq"
    class="container lg:w-2/3 mt-2 lg:mt-6 p-4 scroll-mt-16 lg:scroll-mt-24"
  >
    <div class="text-3xl lg:text-5xl font-bold text-center">
      よくある質問
    </div>
    <div class="grid grid-cols-1 gap-5 mt-2 lg:mt-6">
      <Collapsible
        v-for="(q,index) in questions"
        :key="q.question"
        v-slot="{ open }" 
        class="grid grid-cols-1"
      >
        <CollapsibleTrigger class="flex justify-between items-center text-start pb-2 gap-4 border-b-2 border-black">
          <div class="font-bold pt-2 flex gap-2 lg:gap-4 items-center">
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
            <div class="font-bold text-xl lg:text-2xl">
              {{ `A${index+1}.` }}
            </div>
            <div class="text-md lg:text-lg whitespace-break-spaces">
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