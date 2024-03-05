<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { task } from './interfaces';

    useState<Map<number, task>>(
    'taskList',
    (): Map<number, task> => {
      const taskList = new Map<number, task>();
      taskList.set(1, {id: 1, title: 'hoge', detail: 'aaa', note: '', completed: false});
      taskList.set(2, {id: 2, title: 'huga', detail: 'bbb', note: 'hello', completed: false});
      taskList.set(3, {id: 3, title: 'hugo', detail: 'ccc', note: 'chipichipichapachapa', completed: false});

      return taskList;
    }
  );
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