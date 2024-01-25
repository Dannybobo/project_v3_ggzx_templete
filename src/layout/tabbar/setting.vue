<template>
  <el-space size="small" :spacer="spacer">
    <div>
      <!-- <el-button-group> -->
      <el-button size="default" icon="Refresh" circle @click="handleRefresh" />
      <el-button
        size="default"
        icon="FullScreen"
        circle
        @click="handleFullScreen"
      />
      <el-button size="default" icon="Setting" circle />
      <!-- </el-button-group> -->
    </div>
    <div class="userinfo">
      <img
        :src="userStore.avatar"
        alt=""
        width="32"
        height="32"
        style="
          border: 1px solid lightgray;
          border-radius: 50%;
          margin-right: 10px;
        "
      />
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-space>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user';
import { useLayoutSettingStore } from '@/store/modules/setting';

import { h } from 'vue';
import { ElDivider } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';
const spacer = h(ElDivider, { direction: 'vertical' });

const userStore = useUserStore();

let layoutSettingStore = useLayoutSettingStore();

let $router = useRouter();
let $route = useRoute();

const handleRefresh = () => {
  layoutSettingStore.refresh = true;
};
const handleFullScreen = () => {
  let isFullScreen = document.fullscreenElement;
  if (!isFullScreen) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

const handleLogout = async () => {
  await userStore.userLogout();
  $router.push({ path: '/login', query: { redirect: $route.path } });
};
</script>

<style scoped lang="scss">
.userinfo {
  display: flex;
  align-items: center;
  .el-dropdown-link {
    cursor: pointer;
    color: gray;
    display: flex;
    align-items: center;
  }
}
</style>
