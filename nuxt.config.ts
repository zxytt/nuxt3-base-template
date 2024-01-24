export default defineNuxtConfig({
  ssr: true,
  srcDir: "src/",
  devtools: { enabled: true }, // 开启调试工具
  devServer: { port: 8888 },
  modules: ["@element-plus/nuxt", "@pinia/nuxt", "@vueuse/nuxt"],
  css: ["element-plus/dist/index.css", "@/assets/styles/global.scss"],
});
