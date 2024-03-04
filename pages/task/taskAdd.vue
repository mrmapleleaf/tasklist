<template>
  <h1>タスク追加画面ですよ</h1>
  <div class="taskForm">
    <form v-on:submit.prevent="onAdd"> 
      <dl>
        <dt>
          <label for="taskTitle">名前&nbsp;</label>
        </dt>
        <dd>
          <input type="text" id="taskTitle" required>
        </dd>
        <dt>
          <label for="taskDetail">タスク詳細&nbsp;</label>
        </dt>
        <dd>
          <textarea id="taskNote"></textarea>
        </dd>
        <dt>
          <label for="taskNote">備考&nbsp;</label>
        </dt>
        <dd>
          <textarea id="taskNote"></textarea>
        </dd>
      </dl>
      <button type="submit">登録</button>
    </form>
  </div>
  <NuxtLink v-bind:to="{name: 'task-taskList'}">戻る</NuxtLink>
</template>

<script>

</script>

<style scoped>
  .taskForm {
    border: black 1px solid;
    padding: 10px;
  }
</style>