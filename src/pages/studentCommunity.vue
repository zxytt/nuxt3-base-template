<template>
  <Title>学员社区</Title>
  <div>
    <div v-for="car in carsList.data" :key="car.id" class="car-item">
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
const carsList = reactive({ data: [] });
const getDataFn = async () => {
  const { data } = await getDataApi();
  carsList.data = data;
};
onMounted(() => {
  getDataFn();
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
