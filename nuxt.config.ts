// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-icon", "@nuxt/fonts", "nuxt-gtag"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  gtag: {
    id: 'G-B4GGZE99P7'
  }
});