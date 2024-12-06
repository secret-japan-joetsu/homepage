<script setup lang="ts">
import FloatingContact from '~/components/ui/FloatingContact.vue';
import FloatingMenu from '~/components/ui/FloatingMenu.vue';
useHead({
  title: "新潟県の探偵事務所ならシークレットジャパン上越・柏崎",
  link: [
    {
      href: '/favicon.ico',
      rel: 'icon'
    }
  ]
})

useSeoMeta({
  ogTitle: 'シークレットジャパン上越・柏崎',
  ogDescription: '定額1日10万円追加料金なし。浮気調査や不倫調査、婚前調査、素行調査、人探し様々な依頼に対応可。\nお客様の信頼を第一に対応させていただきます。',
  ogType: 'website',
  ogUrl: 'https://secret-japan-joetsu.com',
  ogImage: '/images/TOP/hero-image.jpg',
  ogSiteName: 'シークレットジャパン上越・柏崎',
  ogLocale: 'ja_jp',
  keywords: '探偵事務所,探偵,新潟県,新潟市,長岡市,三条市,柏崎市,新発田市,小千谷市,加茂市,十日町市,見附市,村上市,燕市,糸魚川市,妙高市,五泉市,上越市,阿賀野市,佐渡市,魚沼市,南魚沼市,胎内市,聖籠町,弥彦村,田上町,阿賀町,出雲崎町,湯沢町,津南町,刈羽村,関川村,粟島浦村,浮気調査,不倫調査,婚前調査,行方調査,素性調査,いじめ調査,ストーカー調査,盗聴器探索調査',
  description: '定額1日10万円追加料金なし。浮気調査や不倫調査、婚前調査、素行調査、人探し様々な依頼に対応可。\nお客様の信頼を第一に対応させていただきます。',
})



</script>
<template>
  <div class="relative">
    <Header />
    <Introduce />
    <WhyChoose />
    <Investigate />
    <Survey />
    <InvestigateFlow />
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
}
</style>