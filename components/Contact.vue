<script setup lang="ts">

</script>

<template>
  <div class="w-full bg-amber-300 p-4 mt-12">
    <div class="text-5xl text-center font-bold my-4 whitespace-break-spaces">
      {{ '初回相談、完全無料！\nまずはあなたのお悩みをご相談ください！' }}
    </div>
    <div class="container grid grid-cols-2 justify-center mt-12">
      <div class="divide-y-2 divide-black w-3/4 mx-auto">
        <div class="text-4xl text-center font-bold">
          {{ 'お電話での問い合わせ' }}
        </div>
        <div class="mt-4 pt-4">
          <div class="text-4xl text-center font-bold">
            <Icon
              name="ic:twotone-call"
              size="2rem"
              color="white"
              class="bg-pink-300 rounded-full p-1"
            />
            {{ '0120-519-773' }}
          </div>
          <div class="text-sm text-center font-bold">
            {{ '受付時間：24時間365日' }}
          </div>
        </div>
      </div>
      <div class=" divide-y-2 divide-black w-3/4 mx-auto">
        <div class="text-4xl text-center font-bold">
          {{ 'LINEでの問い合わせ' }}
        </div>
        <div class="text-center mt-4 pt-4">
          <Button class="bg-green-500 rounded-xl">
            <Icon
              name="bx:bxs-message-rounded-dots"
              size="2rem"
              color="white"
            />
            無料相談受付中
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>