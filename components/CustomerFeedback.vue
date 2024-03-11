<script setup lang="ts">
const feedbacks = [
  {
    avatar: '',
    name: '50代　男性',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '',
    name: '50代　男性',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '50代　女性',
    name: 'name',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '50代　女性',
    name: 'name',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '50代　女性',
    name: 'name',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '50代　男性',
    name: 'name',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '50代　男性',
    name: 'name',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
  {
    avatar: '50代　男性',
    name: 'name',
    title: '高い技術と信頼性',
    content: '自分自身で何度か調査を試みたものの、何も見つからなかったため探偵に依頼することにしました。高度な技術を使って調査を行い、見つけ出してくれました。その後の対処方法も丁…'
  },
]
</script>


<template>
  <div
    id="feedback"
    class="pt-12 md:mb-6"
  >
    <div class="text-2xl md:text-5xl text-center font-bold ">
      お客様の声
    </div>
    <div class="md:w-[60%] md:mx-auto p-4 flex flex-wrap gap-4 justify-center">
      <div
        v-for="(fb, index) in feedbacks"
        :key="index"
        class="border-2 md:w-[48%] p-4"
      >
        <div class="flex flex-row items-center gap-4 mb-2">
          <Avatar size="base">
            <AvatarImage
              src="https://picsum.photos/200"
              alt="@radix-vue"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div class="font-medium">
            <div>{{ fb.name }}</div>
            <div>{{ fb.title }}</div>
          </div>
        </div>
        <div>{{ fb.content }}</div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>