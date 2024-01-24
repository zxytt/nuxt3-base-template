<template>
  <Title>学员社区</Title>
  <div>
    <div v-for="car in carsList" :key="car.id" class="car-item">
      <h3>{{ car.name }}</h3>
      <img
        class="car-pic"
        :src="'//directus-t.itcast.cn/assets/' + `${car.pic}`"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
const carsList = ref();
const asyncData = async () => {
  useFetch("https://directus-t.itcast.cn/items/cars").then((res) => {
    carsList.value = res.data.value.data;
  });
};
onMounted(() => {
  asyncData();
});
</script>

<style lang="scss" scoped>
.car-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 20px;
  .car-pic {
    width: 200px;
  }
}
</style>
