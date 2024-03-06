<template>
  <h2>タスク一覧ですよ</h2>
  <div class="item">
    <div v-for="[id, task] in taskList">
      {{ id }}：
      <NuxtLink v-bind:to="{name: 'task-taskDetail-id', params:{id: id}}">
        {{ task.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { task } from '~/interfaces';
const taskList = useState<Map<number, task>>('taskList');
</script>

<style scoped>
  .item {
    padding: 10px;
  }
</style>