<template>
  <h1>タスク詳細画面ですよ</h1>
  <taskDetailContainer></taskDetailContainer>
  <NuxtLink v-bind:to="{name: 'task-taskList'}">戻る</NuxtLink>
</template>

<script>

</script>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
}
th, td {
  border: 1px solid #333;
  padding: 5px;
}
</style>