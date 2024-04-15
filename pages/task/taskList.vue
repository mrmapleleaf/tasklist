<template>
  <h1>タスク一覧画面ですよ</h1>
  <taskListContainer> </taskListContainer>
  <NuxtLink v-bind:to="{ name: 'task-taskAdd' }"
    >タスク追加画面に遷移しますよ</NuxtLink
  ><br />
  <NuxtLink v-bind:to="{ name: 'index' }">戻る</NuxtLink>
</template>

<script setup lang="ts">
import taskListContainer from '~/components/taskListContainer.vue';
</script>
