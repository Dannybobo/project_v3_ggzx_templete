<template>
  <el-icon style="margin-right: 20px" @click="handleClick">
    <component :is="layoutSettingStore.isFold ? 'Expand' : 'Fold'"></component>
  </el-icon>
</template>

<script setup lang="ts">
import { useLayoutSettingStore } from '@/store/modules/setting';

let layoutSettingStore = useLayoutSettingStore();

const handleClick = () => {
  layoutSettingStore.isFold = !layoutSettingStore.isFold;
};
</script>

<style scoped></style>
