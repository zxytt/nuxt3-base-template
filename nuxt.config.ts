export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  devtools: { enabled: true }, // 开启调试工具
  devServer: { port: 8888 },
  runtimeConfig: {
    public: {
      baseURL: "http://directus-t.itcast.cn/items",
    },
  },
  modules: ["@element-plus/nuxt", "@pinia/nuxt", "@vueuse/nuxt"],
  css: ["element-plus/dist/index.css", "@/assets/styles/global.scss"],
  imports: {
    dirs: ["apis"],
  },
  nitro: {
    devProxy: {
      "/api": {
        target: "https://directus-t.itcast.cn/items",
        changeOrigin: true,
      },
    },
  },
});
