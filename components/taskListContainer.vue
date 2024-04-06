<template>
  <h2>タスク一覧ですよ</h2>
  <div class="item">
    <template v-if="pending">
      <p>データ取得中</p>
    </template>
    <template v-else>
      <div class="taskList-wrapper">
        <div
          v-for="(task, index) in taskList"
          v-bind:key="`key-${index}`"
          class="task"
        >
          <p>{{ task.id }}</p>
          <NuxtLink
            v-bind:to="{
              name: 'task-taskDetail-id',
              params: { id: task.id },
            }"
          >
            <span>{{ task.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { task } from '~/interfaces';

const pending = ref(false);
const error = ref('');
const taskList = ref([] as Array<task>);

onMounted(() => {
  getTaskList();
});

const getTaskList = async () => {
  try {
    pending.value = true;
    taskList.value = await $fetch('http://localhost:8080/task/list');
  } catch (e) {
    console.error('APIの呼び出しでエラーが発生しました', e);
    error.value = 'APIの呼び出しでエラーが発生しました';
  } finally {
    pending.value = false;
  }
};
</script>

<style scoped>
.item {
  padding: 5px 10px 20px 10px;
}
</style>
