<template>
  <h1>タスク詳細画面ですよ</h1>
  <div>
    <table>
      <tr>
        <th>やること</th>
        <td>AAA</td>
      </tr>
      <tr>
        <th>いつまでに</th>
        <td>BBB</td>
      </tr>
      <tr>
        <th>作成日</th>
        <td>CCC</td>
      </tr>
      <tr>
        <th>更新日</th>
        <td>DDD</td>
      </tr>
    </table>
  </div>
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