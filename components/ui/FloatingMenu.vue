<script setup lang="ts">

const menu = [
  {
  text: '当社紹介',
  icon: 'ri:information-2-line',
  href: '#introduce'
},
  {
  text: '浮気調査',
  icon: 'fluent-emoji-high-contrast:detective',
  href: '#investigate'
},
  {
  text: '調査項目',
  icon: 'streamline:interface-content-book-2-library-content-books-book-shelf-stack',
  href: '#survey'
},
  {
  text: 'お客様の声',
  icon: 'ion:ios-person',
  href: '#feedback'
},
  {
  text: '料金',
  icon: 'pepicons-pop:yen-circle',
  href: '#fee'
},
  {
  text: 'F&Q',
  icon: 'ci:help-questionmark',
  href: '#faq'
},
]
</script>

<template>
  <div class="flex fixed right-3 md:right-8 bottom-14 md:bottom-4">
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          size="iconXL"
        >
          <Icon
            name="charm:menu-hamburger"
            size="2rem"
            color="black"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="flex flex-col gap-4 md:mr-4">
        <div
          v-for="item in menu"
          :key="item.href"
          class="flex justify-end items-center gap-2"
        >
          <div class="bg-gray-600 rounded-md text-white p-2 text-xl">
            {{ item.text }}
          </div>
          <Button
            variant="outline"
            size="iconXL"
            as-child
          >
            <a :href="item.href">
              <Icon
                :name="item.icon"
                size="2rem"
                color="black"
              />
            </a>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>



<style scoped>

</style>