<template>
  <h1>タスク追加画面ですよ</h1>
  <taskForm></taskForm>
  <p>カウンター：{{ store.count }}</p>
  <button @click="store.increment()">カウントアップ</button>
</template>

<script setup lang="ts">
const store = useCounterStore();
</script>
