<script setup lang="ts">
  const description = `パートナーの浮気・不貞行為で、お悩みの方は決して少なくありません。1人で悩んでいる方、話し合いの糸口がつかめないで諦めている方、勇気を出して話し合っても、はぐらかされて一向に解決しない方など、多くの方が心のモヤモヤを解消できずに悩んでおられます。パートナーにしっかり認めさせ、事実を明らかにする為には、言い訳の出来ない確たる証拠が必要です。自分自身や家族の未来のために、一歩を踏み出しましょう。我々が浮気や不倫のトラブル解決のお手伝いをします。`

const note1 = `・LINEのやりとり
・ホテルのレシート
・デートの写真
だけでは証拠として不十分です！`

const note2 = `浮気や不倫の証拠は積み重ねによって立証可能なケースが多く、一度きりのデートだけでは浮気、不倫を証明するのは難しいです。裁判までしたくない、示談で相手が慰謝料を認めるような証拠が欲しい方、プロの手により証拠を確実に把握し、絶対に言い逃れできない状況を作る事が重要です。`
const note3 = `当社はお客様の立場に立ち、関係の修復を望むのか、離婚を検討しているのか、その状況に応じてアドバイスを行います。調査費用は50万～100万円、調査期間は1週間～1ヵ月が目安です。調査費用も相手に請求できる場合もあり、費用面が気になる方も安心してご相談ください。`


const list = [
"帰宅後すぐにシャワーを浴びる",
"下着が新しくなった",
"服装、美容（身だしなみ）を意識するようになった",
"性交渉を拒む、変化がある",
"機嫌を取るような行動をする",
"態度が冷たくなる",
"連絡が取れない時がある",
"話している内容や行動に矛盾がある",
"お金の使い方が変わった",
"帰宅時間が遅い、残業や出張が増える",
"自分のスケジュールを詳細に伝えてくる",
"相手のスケジュールを何度も確認してくる",
"外出、飲み会が増えた",
"常にスマホを持ち歩くようになった",
"風呂やトイレなどに持っていく",
"スマホにロックをかけるようになった",
"伏せて置くようになった",
"通知が表示されないようにしている",
]
</script>

<template>
  <div
    id="investigate"
    class="bg-primary scroll-mt-16 lg:scroll-mt-24"
  >
    <div class="p-8 container">
      <h2 class="text-2xl lg:text-5xl font-bold text-center">
        浮気・不倫調査
      </h2>
      <div class="grid grid-cols-1 gap-y-6 mt-4">   
        <div class="text-xl lg:text-3xl font-bold text-center">
          探偵社への依頼で最も多いのがこの浮気・不倫調査です
        </div>
        <div class="xl:w-[60%] lg:w-[90%] w-full mx-auto text-lg col-span-2 leading-relaxed lg:leading-loose whitespace-break-spaces">
          {{ description }}
        </div>
      </div>
      <div class="xl:w-[60%] lg:w-[90%] w-full mx-auto">
        <div class="bg-white mt-6 lg:mt-12 py-2 lg:py-6 px-4 lg:px-10 w-full mx-auto rounded-lg">
          <div class="text-xl lg:text-3xl font-bold justify-center items-center flex gap-2">
            浮気・不倫の怪しい行動例
          </div>
          <div class="text-md whitespace-break-spaces py-4 lg:pt-6 w-full lg:w-4/5 mx-auto px-2 sm:px-2 lg:px-8">
            <ul class="list-disc list-inside">
              <li
                v-for="txt in list"
                :key="txt"
              >
                {{ txt }}
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-[#FFF7BE] mt-6 lg:mt-12 py-2 lg:py-6 px-4 lg:px-10 w-full mx-auto rounded-lg">
          <div class="text-2xl lg:text-5xl font-bold justify-center items-center flex gap-2">
            <Icon
              name="noto-v1:warning"
              class="text-2xl lg:text-6xl "
            />
            注意
          </div>
          <div class="text-lg whitespace-break-spaces pt-2 lg:pt-10 w-full lg:w-2/4 mx-auto font-bold">
            {{ note1 }}
          </div>
          <div class="text-lg whitespace-break-spaces pt-2 lg:pt-10 font-bold">
            {{ note2 }}
          </div>
        </div>
        <div class="text-lg border-4 p-4 lg:p-6 border-red-500 font-bold bg-white mt-6 lg:mt-10 whitespace-break-spaces rounded-lg">
          {{ note3 }}
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>