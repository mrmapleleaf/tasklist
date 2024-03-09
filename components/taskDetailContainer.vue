<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <td>{{ task?.id }}</td>
      </tr>
      <tr>
        <th>タイトル</th>
        <td>{{ task?.title }}</td>
      </tr>
      <tr>
        <th>詳細</th>
        <td>{{ task?.detail }}</td>
      </tr>
      <tr>
        <th>備考</th>
        <td>{{ task?.note }}</td>
      </tr>
      <tr>
        <th>ステータス</th>
        <td>{{ taskStatus }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { task } from '~/interfaces';
// routeパラメータをgetに渡すように変更する
const taskList = useState<Map<number, task>>('taskList');
const task = taskList.value.get(1);

const taskStatus = computed(
  (): string => {
    return task?.completed ? '完了済み' : '未完了'
  }
)
</script>