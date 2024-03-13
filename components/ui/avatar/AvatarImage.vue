<script setup lang="ts">
import { AvatarImage, type AvatarImageProps } from 'radix-vue'

const props = defineProps<AvatarImageProps>()
</script>

<template>
  <AvatarImage
    class="object-cover"
    v-bind="props"
  />
</template>
