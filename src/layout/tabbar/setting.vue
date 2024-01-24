<template>
  <el-space size="5" :spacer="spacer">
    <div>
      <!-- <el-button-group> -->
      <el-button size="default" icon="Refresh" circle></el-button>
      <el-button size="default" icon="FullScreen" circle></el-button>
      <el-button size="default" icon="Setting" circle></el-button>
      <!-- </el-button-group> -->
    </div>
    <div class="userinfo">
      <img
        src="../../../../public/logo.png"
        alt=""
        width="32"
        height="32"
        style="border: 1px solid lightgray; border-radius: 50%"
      />
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-space>
</template>

<script setup lang="ts">
import { ElDivider } from 'element-plus';
import { h } from 'vue';

const spacer = h(ElDivider, { direction: 'vertical' });
</script>

<style scoped lang="scss">
.userinfo {
  display: flex;
  align-items: center;
}
</style>
