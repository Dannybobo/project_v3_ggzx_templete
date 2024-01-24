<template>
  <div class="layout_container">
    <!-- Left menu -->
    <div class="layout_slider" :class="{ fold: layoutSettingStore.isFold }">
      <logo @click="handleSliderCollapse"></logo>
      <el-scrollbar class="slider_scrollbar">
        <el-menu
          background-color="#001530"
          text-color="white"
          :collapse="layoutSettingStore.isFold"
          :default-active="$route.path"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- Top nav -->
    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.isFold }">
      <Tabbar></Tabbar>
    </div>
    <!-- Content -->
    <div class="layout_main" :class="{ fold: layoutSettingStore.isFold }">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import Main from './main/index.vue';
import Tabbar from './tabbar/index.vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
import { useLayoutSettingStore } from '@/store/modules/setting';

let userStore = useUserStore();
let layoutSettingStore = useLayoutSettingStore();

let $route = useRoute();
</script>

<script lang="ts">
export default {
  name: 'Layout',
};
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  color: black;
  .layout_slider {
    width: $base-slider-width;
    height: 100vh;
    background-color: $base-slider-background;
    color: white;
    transition: all 0.3s ease-in;
    .slider_scrollbar {
      width: 100%;
      height: calc(100vh - $base-slider-logo-height);
      overflow: auto;
    }

    &.fold {
      width: $base-slider-width-fold;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-slider-width;
    width: calc(100% - $base-slider-width);
    height: $base-tabbar-height;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
    transition: all 0.3s ease-in;

    &.fold {
      left: $base-slider-width-fold;
      width: calc(100% - $base-slider-width-fold);
    }
  }
  .layout_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-slider-width;
    width: calc(100% - $base-slider-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: rgb(241, 241, 241);
    padding: 10px;
    overflow: auto;
    transition: all 0.3s ease-in;
    &.fold {
      left: $base-slider-width-fold;
      width: calc(100% - $base-slider-width-fold);
    }
  }
}
</style>
