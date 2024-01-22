<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">666</el-button>
    <el-button type="success" size="small" :icon="Edit">777</el-button>
    <div class="demo-pagination-block">
      <div class="demonstration">All combined</div>
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Edit } from '@element-plus/icons-vue'
</script>

<style></style>
