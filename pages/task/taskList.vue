<template>
  <h1>タスク一覧画面ですよ</h1>
  <div>
    <h2>タスク一覧ですよ</h2>
    <ul>
      <li>AAA</li>
      <li>BBB</li>
      <li>CCC</li>
    </ul>
    <NuxtLink v-bind:to="{name: 'task-taskDetail'}">タスク詳細画面に遷移しますよ</NuxtLink>
  </div>
  <NuxtLink v-bind:to="{name: 'task-taskAdd'}">タスク追加画面に遷移しますよ</NuxtLink><br>
  <NuxtLink v-bind:to="{name: 'index'}">戻る</NuxtLink>
</template>

<script>

</script>