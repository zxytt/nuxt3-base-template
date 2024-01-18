# 开发文档

## nuxt3官方文档

- https://nuxt.com.cn/

## 初始化项目

- pnpm dlx nuxi@latest init <project-name>

## 安装

- node版本>18.0.0
- 建议pnpm install

## vscode插件

- volar（vue3）

## 相关依赖

- eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-vue
- prettier @types/prettier
- husky
- sass
- tailwindcss @types/tailwindcss prettier-plugin-tailwindcss
- element-plus @element-plus/icons-vue @element-plus/nuxt
- vue-router
- pinia @pinia/nuxt
- @vueuse/core
- unplugin-auto-import

## 关于nuxt

- 路由：pages文件夹下目录自动生成
- seo优化：app.vue文件中使用useSeoMeta方法
- 自带插件
- 数据请求：nuxt提供了四种方法：useAsyncData 、useFetch 、useLazyFetch 、useLazyAsyncData
