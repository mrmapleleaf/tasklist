<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <td>{{ taskDetail?.id }}</td>
      </tr>
      <tr>
        <th>タイトル</th>
        <td>{{ taskDetail?.title }}</td>
      </tr>
      <tr>
        <th>詳細</th>
        <td>{{ taskDetail?.detail }}</td>
      </tr>
      <tr>
        <th>作成日時</th>
        <td>{{ formatedCreatedAt }}</td>
      </tr>
      <tr>
        <th>更新日時</th>
        <td>{{ formatedUpdatedAt }}</td>
      </tr>
      <tr>
        <th>ステータス</th>
        <td>{{ taskDetail?.completed }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
const pending = ref(false);
const taskDetail = ref();
const route = useRoute();

onBeforeMount(() => {
  getTaskdetail(route);
});

const formatedCreatedAt = computed(() => {
  if (taskDetail.value && taskDetail.value.created_at) {
    return formatDate(taskDetail.value.created_at);
  }
  return '';
});

const formatedUpdatedAt = computed(() => {
  if (taskDetail.value && taskDetail.value.updated_at) {
    return formatDate(taskDetail.value.updated_at);
  }
  return '';
});

const getTaskdetail = async (route: any) => {
  pending.value = true;
  try {
    taskDetail.value = await $fetch(
      'http://localhost:8080/task/detail/' + `${route.params.id}`
    );
  } catch (e) {
    console.error('APIの呼び出しでエラーが発生しました', e);
  } finally {
    pending.value = false;
  }
};

const formatDate = (dateTime: string) => {
  return dateTime.replace('T', ' ');
};
</script>
