// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-06-11",
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/fonts", "nuxt-gtag"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
      extensions: [".vue"],
      ignore: ["ui/**", "**/index.ts", "**/variants.ts"],
    },
    {
      path: "~/components/ui",
      pathPrefix: false,
      extensions: [".vue"],
      ignore: ["**/index.ts", "**/variants.ts"],
    },
  ],
  gtag: {
    id: 'G-B4GGZE99P7'
  },
  runtimeConfig: {
    public: {
      googleForm: {
        actionUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd9GmzXnWz90bddmedTCM1rX7BLKujtMIBXbw1Emqo72-AGDA/formResponse',
        contactType: 'entry.1042758237',
        name: 'entry.1602038649',
        preferredContact: 'entry.1552285854',
        phone: 'entry.1991464243',
        email: 'entry.1600913936',
        relation: 'entry.747819089',
        contactTime: 'entry.240984600',
        area: 'entry.675409337',
        urgency: 'entry.2116029241',
        message: 'entry.681228178',
        consideration: 'entry.549283541',
        privacyConsent: 'entry.500875592',
      },
    },
  },
});
