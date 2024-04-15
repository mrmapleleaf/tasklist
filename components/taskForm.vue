<template>
  <div class="taskForm">
    <form v-on:submit.prevent="onAddTask">
      <dl>
        <dt>
          <label for="id">id&nbsp;</label>
        </dt>
        <dd>
          <input
            type="number"
            id="id"
            v-model.number.lazy="newTask.id"
            required
          />
        </dd>
        <dt>
          <label for="title">タスク名&nbsp;</label>
        </dt>
        <dd>
          <input type="text" id="title" v-model.lazy="newTask.title" required />
        </dd>
        <dt>
          <label for="detail">タスク詳細&nbsp;</label>
        </dt>
        <dd>
          <textarea id="detail" v-model.lazy="newTask.detail"></textarea>
        </dd>
        <dt>
          <label for="note">備考&nbsp;</label>
        </dt>
        <dd>
          <textarea id="note" v-model.lazy="newTask.note"></textarea>
        </dd>
      </dl>
      <button type="submit">登録</button>
    </form>
  </div>
  <NuxtLink v-bind:to="{ name: 'task-taskList' }">戻る</NuxtLink>
</template>

<script setup lang="ts">
import type { task } from '~/interfaces.ts';

const state = useState<Map<number, task>>('taskList');
const router = useRouter();

const newTask: task = reactive({
  id: 0,
  title: '',
  detail: '',
  note: '',
  completed: false,
});
console.log(newTask);

const onAddTask = (): void => {
  if (!state.value.has(newTask.id)) {
    state.value.set(newTask.id, newTask);
    router.push({ name: 'task-taskList' });
  } else {
    alert('入力されたIDは既に存在しています。');
  }
};

watch(newTask, () => {
  console.log(newTask);
});
</script>

<style scoped>
.taskForm {
  border: black 1px solid;
  padding: 10px;
}
</style>
