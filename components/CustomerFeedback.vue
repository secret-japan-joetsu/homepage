<script setup lang="ts">
const feedbacks = [
  {
    avatar: '/images/feedback/account-men.png',
    name: '50代　男性',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '/images/feedback/account-men.png',
    name: '50代　男性',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '/images/feedback/account-men.png',
    name: '50代　女性',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '/images/feedback/account-woman.png',
    name: '50代　女性',
    bg: 'bg-rose-400',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '/images/feedback/account-men.png',
    name: '50代　女性',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '/images/feedback/account-men.png',
    name: '50代　女性',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '/images/feedback/account-woman.png',
    name: '50代　女性',
    bg: 'bg-rose-400',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '/images/feedback/account-woman.png',
    name: '50代　女性',
    bg: 'bg-rose-400',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
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
    <div class="lg:w-[60%] lg:mx-auto p-4 flex flex-wrap gap-4 justify-center">
      <div
        v-for="(fb, index) in feedbacks"
        :key="index"
        class="lg:w-[48%] w-full flex flex-col"
      >
        <Collapsible
          v-slot="{ open }"
          class="border-2"
        >
          <CollapsibleTrigger class="flex justify-between items-center w-full text-start p-2">
            <div class="flex flex-row items-center gap-4 mb-2">
              <Avatar
                size="base"
                :class="['shadow-lg', fb.bg ?? 'bg-violet-300']"
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