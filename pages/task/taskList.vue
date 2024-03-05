<template>
  <h1>タスク一覧画面ですよ</h1>
  <div>
    <h2>タスク一覧ですよ</h2>
      <ul>
        <template v-for="[id, task] in taskList">
          <NuxtLink v-bind:to="{name: 'task-taskDetail-id', params: {id: id}}">
            <li>{{ id }} : {{ task.title }}</li>
          </NuxtLink>
        </template>
      </ul>
  </div>
  <NuxtLink v-bind:to="{name: 'task-taskAdd'}">タスク追加画面に遷移しますよ</NuxtLink><br>
  <NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink>
</template>

<script setup lang="ts">
import type { task } from '~/interfaces';  

const taskList = useState<Map<number, task>>('taskList');
</script>