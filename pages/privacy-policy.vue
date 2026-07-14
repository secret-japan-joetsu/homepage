<script setup lang="ts">
useHead({
  title: 'プライバシーポリシー | シークレットジャパン上越・柏崎',
})

useSeoMeta({
  title: 'プライバシーポリシー | シークレットジャパン上越・柏崎',
  description: 'シークレットジャパン上越・柏崎における個人情報の取り扱いについてご案内します。',
  robots: 'index, follow',
  ogUrl: 'https://secret-japan-joetsu.com/privacy-policy',
})

const sections = [
  {
    title: '1. 取得する情報',
    paragraphs: [
      '当事務所は、お問い合わせやご相談の受付にあたり、お名前（仮名を含みます）、電話番号、メールアドレス、ご希望の連絡方法、相談内容、対象者との関係、希望連絡時間帯、調査希望エリア、緊急度、折り返し時の配慮事項その他ご本人が入力または提供した情報を取得します。',
      'また、本サイトの利用状況を把握するため、Cookie、IPアドレス、端末・ブラウザ情報、閲覧ページ、参照元、閲覧日時等のアクセス情報を取得する場合があります。',
    ],
  },
  {
    title: '2. 利用目的',
    paragraphs: [
      '取得した情報は、ご相談への回答、本人確認、連絡、面談・見積り・調査サービスの提案および提供、契約管理、アフターサポート、安全確保、不正利用の防止、サービスと本サイトの改善、法令上必要な対応のために利用します。',
      '上記の範囲を超えて利用する必要が生じた場合は、法令で認められる場合を除き、あらかじめご本人の同意を得ます。',
    ],
  },
  {
    title: '3. 第三者提供',
    paragraphs: [
      '当事務所は、ご本人の同意がある場合、法令に基づく場合、人の生命・身体・財産の保護に必要で同意を得ることが困難な場合など、法令で認められる場合を除き、個人データを第三者へ提供しません。',
    ],
  },
  {
    title: '4. 外部サービスと委託',
    paragraphs: [
      'お問い合わせの受付、情報の保管、メール送信、アクセス解析その他の業務において、Google Forms、Google Analytics等の外部サービスを利用し、必要な範囲で個人情報の取り扱いを委託する場合があります。委託先を選定する際は、個人情報を適切に取り扱う事業者を選び、必要かつ適切な監督を行います。',
      '外部サービスに送信された情報は、各サービス提供者のプライバシーポリシーおよび利用条件に基づいて取り扱われます。ブラウザの設定によりCookieを無効にできますが、本サイトの一部機能や表示に影響する場合があります。',
    ],
  },
  {
    title: '5. 安全管理',
    paragraphs: [
      '当事務所は、個人情報への不正アクセス、漏えい、紛失、改ざん等を防止するため、アクセス制限、適切な保管、委託先の確認その他必要かつ適切な安全管理措置を講じます。',
    ],
  },
  {
    title: '6. 保管期間',
    paragraphs: [
      '取得した個人情報は、利用目的の達成に必要な期間、法令や契約に基づき保管が必要な期間、または紛争等への対応に合理的に必要な期間に限って保管し、その後は適切な方法で削除または廃棄します。',
    ],
  },
  {
    title: '7. 開示・訂正・利用停止等',
    paragraphs: [
      'ご本人は、法令に基づき、当事務所が保有するご本人の個人データについて、利用目的の通知、開示、訂正・追加・削除、利用停止・消去、第三者提供の停止等を請求できます。本人確認を行ったうえで、法令に従い適切に対応します。',
    ],
  },
  {
    title: '8. ポリシーの変更',
    paragraphs: [
      '法令、提供サービスまたは個人情報の取り扱い方法の変更等に応じて、本ポリシーを改定することがあります。重要な変更がある場合は、本サイト上で分かりやすくお知らせします。',
    ],
  },
] as const
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <Header />
    <main class="px-4 pb-16 pt-24 lg:pt-36">
      <article class="container max-w-4xl rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 lg:p-10">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-accent"
        >
          <Icon name="ion:arrow-back" />
          TOPへ戻る
        </NuxtLink>

        <h1 class="mt-6 text-3xl font-black text-slate-900 lg:text-5xl">
          プライバシーポリシー
        </h1>
        <p class="mt-6 leading-8 text-slate-700">
          シークレットジャパン上越・柏崎（以下「当事務所」）は、ご相談者様その他の方からお預かりする個人情報を重要な情報と認識し、個人情報の保護に関する法律その他の関係法令を遵守して、以下のとおり取り扱います。
        </p>

        <div class="mt-10 grid gap-9">
          <section
            v-for="section in sections"
            :key="section.title"
          >
            <h2 class="text-xl font-bold text-slate-900 lg:text-2xl">
              {{ section.title }}
            </h2>
            <p
              v-for="paragraph in section.paragraphs"
              :key="paragraph"
              class="mt-3 leading-8 text-slate-700"
            >
              {{ paragraph }}
            </p>
          </section>

          <section>
            <h2 class="text-xl font-bold text-slate-900 lg:text-2xl">
              9. お問い合わせ窓口
            </h2>
            <dl class="mt-4 grid gap-2 rounded-2xl bg-slate-50 p-5 leading-7 text-slate-700">
              <div>
                <dt class="inline font-bold">
                  事業者名：
                </dt><dd class="inline">
                  シークレットジャパン上越・柏崎
                </dd>
              </div>
              <div>
                <dt class="inline font-bold">
                  所在地：
                </dt><dd class="inline">
                  〒945-0047 新潟県柏崎市比角
                </dd>
              </div>
              <div>
                <dt class="inline font-bold">
                  電話：
                </dt><dd class="inline">
                  <a
                    href="tel:07069799272"
                    class="underline"
                  >070-6979-9272</a>
                </dd>
              </div>
              <div>
                <dt class="inline font-bold">
                  メール：
                </dt><dd class="inline">
                  <a
                    href="mailto:secret.japan.joetsu@gmail.com"
                    class="break-all underline"
                  >secret.japan.joetsu@gmail.com</a>
                </dd>
              </div>
            </dl>
          </section>
        </div>

        <p class="mt-10 text-right text-sm text-slate-500">
          制定日：2026年7月13日
        </p>
      </article>
    </main>
    <Footer />
  </div>
</template>
