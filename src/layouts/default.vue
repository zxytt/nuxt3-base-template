<template>
  <div class="body">
    <PageHeader />
    <main class="container">
      <slot />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.body {
  min-width: 1000px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
