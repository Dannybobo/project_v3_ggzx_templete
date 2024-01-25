<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="readyFlag"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useLayoutSettingStore } from '@/store/modules/setting';
import { nextTick, ref, watch } from 'vue';

let layoutSettingStore = useLayoutSettingStore();
let readyFlag = ref(true);
watch(
  () => layoutSettingStore.refresh,
  () => {
    readyFlag.value = false;
    nextTick(() => {
      readyFlag.value = true;
    });
  },
);
</script>
<script lang="ts">
export default {
  name: 'Main-container',
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-active {
  transition:
    opacity 1s,
    transform 0.5s;
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
</style>
