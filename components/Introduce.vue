<script setup lang="ts">
  const description = "探偵の調査は、依頼者様のプライバシーに深くかかわる仕事を承っております。依頼者様が不安に思われて当然です。シークレットジャパングループは全国に８０店を構え、多くの依頼者様から「ありがとう」のお言葉と激励を頂いております。探偵選びは、信頼できる私たちに是非お任せ下さい。勇気を出して一歩前へ「あの日連絡して良かった」と言っていただけるのが、１番うれしいお言葉です。"
</script>

<template>
  <div
    id="introduce"
    class="w-full relative h-[42svh] md:h-[60svh]  lg:h-[calc(80svh)] bg-[url('/images/TOP/hero-image.jpg')] bg-no-repeat bg-cover flex justify-center items-center"
  >
    <div class="bg-black/50 p-2 md:p-6 lg:p-8 mt-16 md:mt-20 lg:mt-24 backdrop-brightness-100">
      <h2 class="text-xl sm:text-3xl md:text-5xl sm:leading-tight xl:leading-tight font-bold text-center text-primary whitespace-break-spaces">
        {{ "新潟県の探偵事務所(興信所)なら\nシークレットジャパン上越・柏崎" }}
      </h2>
      <div class="text-lg md:text-3xl leading-tight md:leading-normal xl:leading-normal text-white font-bold text-center mt-2 md:mt-5 whitespace-break-spaces">
        {{
          "ご依頼者様がお気軽に相談できるように\n24時間365日対応しています。\n相談、面談料は無料です。"
        }}
      </div>
    </div>
  </div>
  <div class="container md:w-2/3 p-4 mx-auto my-8 justify-center items-center">
    <div class="xl:w-[75%] lg:w-[90%] w-full mx-auto">
      <div class="text-xl md:text-2xl lg:text-5xl font-bold text-accent text-center">
        初めての方へ
      </div>
      <div class="text-lg lg:leading-loose whitespace-break-spaces font-bold md:mt-3">
        {{ description }}
      </div>
    </div>
  </div>
</template>



<style scoped></style>