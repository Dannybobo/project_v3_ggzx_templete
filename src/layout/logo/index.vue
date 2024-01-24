<template>
  <div class="logo">
    <img v-if="!setting.logoHidden" :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting';
</script>
<script lang="ts">
export default {
  name: 'Logo',
};
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  padding: 15px 19px;
  height: $base-slider-logo-height;
  img {
    width: 29px;
    height: 29px;
  }
  p {
    font-size: $base-slider-logo-title-fontSize;
    margin-left: 20px;
  }
}
</style>
