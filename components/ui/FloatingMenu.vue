<script setup lang="ts">

const menu = [
  {
    text: '当社紹介',
    icon: '/images/menu/info.png',
    href: 'introduce'
  },
  {
    text: '浮気・不倫調査',
    icon: '/images/menu/investigate.png',
    href: 'investigate'
  },
  {
    text: '調査項目',
    icon: '/images/menu/survey.png',
    href: 'survey'
  },
  {
    text: 'お客様の声',
    icon: '/images/menu/feedback.png',
    href: 'feedback'
  },
  {
    text: '料金',
    icon: '/images/menu/fee.png',
    href: 'fee'
  },
  {
    text: 'よくある質問',
    icon: '/images/menu/faq.png',
    href: 'faq'
  },
  {
    text: '事務所概要',
    icon: '/images/menu/office.png',
    href: 'office'
  },
  {
    text: 'ブログ ',
    icon: '/images/menu/blog.png',
    href: 'blog'
  },
]

const open = ref(true)
const timeoutId = ref()
const changeState = () => open.value = !open.value

onMounted(() => {
  timeoutId.value = setTimeout(() => {
    open.value = false
  }, 3000)
})

onUnmounted(() => {
  if(timeoutId.value !== null) clearTimeout(timeoutId.value)
})

const scrollToSection = (id: string) => {
  if(id === 'blog'){
    location.href = '/blog'
    return;
  }
  if(timeoutId.value !== null) clearTimeout(timeoutId.value)
  const section = document.getElementById(id)
  section?.scrollIntoView()
}


</script>

<template>
  <div class="flex fixed right-2 lg:right-8 bottom-2 lg:bottom-4">
    <Popover
      :open="open"
      default-open
    >
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          size="iconXL"
          tabindex="-1"
          class="shadow-md shadow-slate-400"
          @click="changeState"
        >
          <Icon
            name="charm:menu-hamburger"
            size="1.5rem"
            color="black"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        class="flex flex-col gap-1 lg:gap-2 lg:mr-6 p-2 lg:p-2"
        side="top"
      >
        <div
          v-for="item in menu"
          :key="item.href"
          class="flex justify-end items-center gap-2"
        >
          <div class="bg-[#424242] rounded-md text-white p-2 text-sm">
            {{ item.text }}
          </div>
          <Button
            variant="outline"
            size="iconXL"
            tabindex="-1"
            @click="scrollToSection(item.href)"
          >
            <img
              class="object-contain h-6 w-6"
              :src="item.icon"
            >
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>



<style scoped></style>
