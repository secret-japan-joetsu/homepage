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
  <div class="text-5xl text-center font-bold mt-12 mb-6">
    選ばれる理由
  </div>
  <div class="w-[60%] mx-auto flex flex-wrap gap-4 justify-center">
    <div
      v-for="(fb,index) in feedbacks"
      :key="index"
      class="border-2 w-[48%] p-4"
    >
      <div class="flex flex-row items-center gap-4 mb-2">
        <Avatar>
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
</template>



<style scoped>

</style>