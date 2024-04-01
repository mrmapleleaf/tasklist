<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { task } from './interfaces';
import { createTaskList } from './server/taskDB';

useState<Map<number, task>>('taskList', (): Map<number, task> => {
  return createTaskList();
});
</script>

<style>
main {
  border: blue 1px solid;
  padding: 10px;
}
header {
  border: green 1px solid;
  padding: 10px;
}
footer {
  border: red 1px solid;
  padding: 10px;
}
</style>
