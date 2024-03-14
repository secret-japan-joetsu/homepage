<script setup lang="ts">

const menu = [
  {
  text: '当社紹介',
  icon: '/images/menu/info.png',
  href: '#introduce'
},
  {
  text: '浮気調査',
  icon: '/images/menu/investigate.png',
  href: '#investigate'
},
  {
  text: '調査項目',
  icon: '/images/menu/survey.png',
  href: '#survey'
},
  {
  text: 'お客様の声',
  icon: '/images/menu/feedback.png',
  href: '#feedback'
},
  {
  text: '料金',
  icon: '/images/menu/fee.png',
  href: '#fee'
},
  {
  text: 'F&Q',
  icon: '/images/menu/faq.png',
  href: '#faq'
},
]

</script>

<template>
  <div class="flex fixed right-2 lg:right-8 bottom-2 lg:bottom-4">
    <Popover
      default-open
    >
      <PopoverTrigger
        as-child
      >
        <Button
          variant="outline"
          size="iconXL"
          class="shadow-md shadow-slate-400"
        >
          <Icon
            name="charm:menu-hamburger"
            size="2rem"
            color="black"
          /> 
        </Button>
      </PopoverTrigger>
      <PopoverContent class="flex flex-col gap-1 lg:gap-4 lg:mr-4 p-2 lg:p-4">
        <div
          v-for="item in menu"
          :key="item.href"
          class="flex justify-end items-center gap-2"
        >
          <div class="bg-gray-600 rounded-md text-white p-2 text-md lg:text-xl">
            {{ item.text }}
          </div>
          <Button
            variant="outline"
            size="iconXL"
            as-child
          >
            <a :href="item.href">
              <img
                class="object-contain h-7 w-7 lg:h-9 lg:w-9"
                :src="item.icon"
              >
            </a>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>



<style scoped>

</style>