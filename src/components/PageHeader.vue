<template>
  <div class="page-header">
    <div class="inner-wrapper">
      <div class="header-title">
        <img src="@/assets/images/logo.png" alt="" />
      </div>
      <div class="header-nav">
        <div>
          <NuxtLink class="link" to="/allCourse">全部课程</NuxtLink>
          <NuxtLink class="link" to="/freeCourse">免费课程</NuxtLink>
          <NuxtLink class="link" to="/startClassDate">开班时间</NuxtLink>
          <NuxtLink class="link" to="/studentCommunity">学员社区</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.inner-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 1200px;
  margin: auto;
}
.header-nav {
  .link {
    margin-right: 10px;
    font-size: 16px;
  }
}
</style>
