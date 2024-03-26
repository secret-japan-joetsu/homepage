<script setup lang="ts">
const feedbacks = [
  {
    avatar: '/images/feedback/account-men.png',
    name: '30代　男性',
    title: '親切、丁寧な対応',
    content: '妻の不倫で悩んでいたのですが、親切丁寧な対応で、相談して良かったです。メンタル的にもすごく救われました。'
  },
  {
    avatar: '/images/feedback/account-woman.png',
    name: '20代　女性',
    title: '安心して依頼できました',
    bg: 'bg-rose-400',
    content: 'スタッフの方が丁寧に対応してくれて、とても良かったです。ストーカー問題が解決し、日常が戻ってきました。'
  },
  {
    avatar: '/images/feedback/account-men.png',
    name: '40代　男性',
    title: 'プライバシーの保護',
    content: '素行調査は非常にデリケートな問題でしたが、プライバシーを厳重に保護してくれました。\n調査の結果も期待通りで、依頼して良かったと思っています。'
  },
  {
    avatar: '/images/feedback/account-woman.png',
    name: '30代　女性',
    bg: 'bg-rose-400',
    title: '詳細な調査結果で心配が解消しました',
    content: '婚前調査を依頼した時、とても不安でしたが、詳細な報告と丁寧なフォローアップで安心しました。\n結果的には大丈夫だったのですが、確かめて安心したことは大きかったです。本当にありがとうございました。'
  },
  {
    avatar: '/images/feedback/account-men.png',
    name: '20代　男性',
    title: '調査力に満足',
    content: '妻のLINEを見てしまい、不倫を疑い相談しました。徹底的に調査していただき、相手方からの示談金もしっかりもらえました。\n妻とは話し合いの途中ですが、証拠がそろっているので有利な条件で離婚できそうです。ありがとうございました。'
  },
  {
    avatar: '/images/feedback/account-woman.png',
    name: '40代　女性',
    bg: 'bg-rose-400',
    title: '婚前調査',
    content: 'SNSで知り合った男性の方だったので、真実かどうかわからなく依頼しました。相手の素性もしっかり調べてもらい、\n対応も丁寧で気持ちが楽になりました。'
  },
]
</script>


<template>
  <div
    id="feedback"
    class="pt-2 lg:pt-6 lg:mb-6 scroll-mt-16 lg:scroll-mt-24"
  >
    <div class="text-2xl lg:text-5xl text-center font-bold ">
      お客様の声
    </div>
    <div class="sm:w-[90%] lg:w-[60%] mx-auto p-4 flex flex-wrap gap-4 justify-center">
      <div
        v-for="(fb, index) in feedbacks"
        :key="index"
        class="md:w-[48%] w-full flex flex-col"
      >
        <Collapsible
          v-slot="{ open }"
          class="border-2"
        >
          <CollapsibleTrigger class="flex justify-between items-center w-full text-start p-2">
            <div class="flex flex-row items-center gap-4 mb-2">
              <Avatar
                size="base"
                :class="['shadow-lg', fb.bg ?? 'bg-[#D3E1F2]']"
              >
                <AvatarImage
                  :src="fb.avatar"
                  class="h-12 w-12"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div class="font-bold text-lg">
                <div>{{ fb.title }}</div>
                <div>{{ fb.name }}</div>
              </div>
            </div>
            <Icon
              :name="open ? 'ion:chevron-up' : 'ion:chevron-down'"
              size="2.4em"
            />
          </CollapsibleTrigger>
          <CollapsibleContent class="grid grid-cols-1 gap-y-4 mx-4">
            <div class="col-span-2 whitespace-break-spaces text-md text-start pb-6">
              {{ fb.content }}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  </div>
</template>



<style scoped>
</style>