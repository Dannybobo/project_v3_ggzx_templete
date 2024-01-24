<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <SliderButton></SliderButton>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar_right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb.vue';
import Setting from './setting.vue';
import SliderButton from './sliderButton.vue';
</script>

<script lang="ts">
export default {
  name: 'Tabbar',
};
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  padding-bottom: 2px;
  display: flex;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 90%,
    rgba(214, 214, 214, 1) 100%
  );
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
