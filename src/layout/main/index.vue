<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'Main-container',
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-enter-active {
  transition:
    opacity 1s,
    transform 0.5s;
}
.fade-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
</style>
