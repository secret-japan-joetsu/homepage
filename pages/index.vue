<script setup lang="ts">
import FloatingContact from '~/components/ui/FloatingContact.vue';
import FloatingMenu from '~/components/ui/FloatingMenu.vue';


</script>
<template>
  <div class="relative bg-slate-100">
    <Header />
    <Introduce />
    <WhyChoose />
    <Investigate />
    <Survey />
    <CustomerFeedback />
    <Fee />
    <FAQ />
    <OfficeInfomation />
    <Contact />
    <Footer />
    <FloatingContact />
    <FloatingMenu />
  </div>
</template>

<style>
html { 
	scroll-behavior: smooth;
  font-family: Hiragino Mincho ProN, sans-serif;
}
</style>