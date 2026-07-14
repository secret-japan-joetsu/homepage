<script setup lang="ts">
import FloatingContact from '~/components/ui/FloatingContact.vue'

useHead({
  title: '無料相談 | シークレットジャパン上越・柏崎',
  link: [
    {
      href: '/favicon.ico',
      rel: 'icon',
    },
  ],
})

useSeoMeta({
  title: '無料相談 | シークレットジャパン上越・柏崎',
  ogTitle: '無料相談 | シークレットジャパン上越・柏崎',
  description:
    '浮気・不倫調査をはじめ、各種調査のご相談を受け付けています。秘密厳守で対応します。',
  ogDescription:
    '浮気・不倫調査をはじめ、各種調査のご相談を受け付けています。秘密厳守で対応します。',
  ogType: 'website',
  ogUrl: 'https://secret-japan-joetsu.com/contact',
  ogImage: '/images/TOP/hero-image.jpg',
})

const supportCards = [
  {
    title: '電話で相談',
    body: 'お急ぎの方はお電話でご相談ください。相談・面談料は無料です。',
    href: 'tel:07069799272',
    label: '070-6979-9272',
    style: 'bg-slate-900 text-white',
    icon: 'material-symbols:phone-in-talk-watchface-indicator',
  },
  {
    title: 'LINEで相談',
    body: '24時間受付中です。時間を気にせずご相談いただけます。',
    href: 'https://lin.ee/HqEAKtY',
    label: 'LINEで無料相談',
    style: 'bg-green-500 text-white',
    image: '/images/LINE_Brand_icon.png',
  },
  {
    title: 'メールで相談',
    body: 'メールでの直接相談をご希望の方はこちらをご利用ください。',
    href: 'mailto:secret.japan.joetsu@gmail.com',
    label: 'secret.japan.joetsu@gmail.com',
    style: 'bg-white text-slate-900 border border-slate-200',
    icon: 'material-symbols:mail-outline',
  },
] as const
</script>

<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,#f7f8ef_0%,#ffffff_28%,#f5f7f8_100%)]">
    <Header />

    <section class="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(157,191,77,0.22),_rgba(247,248,239,0.72)_42%,_rgba(255,255,255,0)_100%)] px-4 pb-10 pt-24 lg:pb-16 lg:pt-36">
      <div class="container relative">
        <NuxtLink
          to="/"
          class="mb-8 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:text-accent"
        >
          <Icon
            name="ion:arrow-back"
            size="1.1rem"
          />
          TOPへ戻る
        </NuxtLink>
        <div class="mx-auto max-w-4xl text-center">
          <h1 class="text-4xl font-black tracking-tight text-slate-900 lg:text-6xl">
            無料相談
          </h1>
          <p class="mx-auto mt-5 max-w-3xl whitespace-break-spaces text-base leading-8 text-slate-600 lg:text-lg">
            {{
              "浮気・不倫調査をはじめ、各種調査のご相談を受け付けています。\n秘密厳守で対応しますので、まずはお気軽にご相談ください。"
            }}
          </p>
        </div>
      </div>
    </section>

    <section class="px-4 pb-8">
      <div class="container">
        <div class="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.9fr)]">
          <ContactForm />

          <div class="grid gap-4 self-start">
            <div class="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200">
              <h2 class="text-2xl font-bold text-slate-900">
                ご相談前のご案内
              </h2>
              <ul class="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
                <li class="rounded-2xl bg-slate-50 px-4 py-3">
                  ご相談内容は秘密厳守で対応します。
                </li>
                <li class="rounded-2xl bg-slate-50 px-4 py-3">
                  内容を確認後、担当より折り返しご連絡します。
                </li>
                <li class="rounded-2xl bg-slate-50 px-4 py-3">
                  お急ぎの場合は電話またはLINEでのご相談がスムーズです。
                </li>
              </ul>
            </div>

            <div
              v-for="card in supportCards"
              :key="card.title"
              class="rounded-3xl p-6 shadow-xl shadow-slate-200"
              :class="card.style"
            >
              <div class="flex items-center gap-3">
                <img
                  v-if="'image' in card"
                  :src="card.image"
                  class="h-10 w-10 object-contain"
                >
                <Icon
                  v-else
                  :name="card.icon"
                  size="2rem"
                />
                <h3 class="text-xl font-bold">
                  {{ card.title }}
                </h3>
              </div>
              <p class="mt-3 text-sm leading-7 opacity-80">
                {{ card.body }}
              </p>
              <a
                :href="card.href"
                :target="card.href.startsWith('http') ? '_blank' : undefined"
                rel="noreferrer"
                class="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 text-center text-base font-bold shadow-md transition hover:opacity-90"
                :class="card.title === 'メールで相談' ? 'bg-slate-900 text-white' : 'bg-white/15 ring-1 ring-inset ring-white/30'"
              >
                {{ card.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <FloatingContact />
  </div>
</template>
