import type { task } from '~/interfaces';

export function createTaskList(): Map<number, task> {
  const taskListInit = new Map<number, task>();

  taskListInit.set(1, {
    id: 1,
    title: 'hoge',
    detail: 'aaa',
    note: '',
    completed: false,
  });
  taskListInit.set(2, {
    id: 2,
    title: 'huga',
    detail: 'bbb',
    note: 'hello',
    completed: false,
  });
  taskListInit.set(3, {
    id: 3,
    title: 'hugo',
    detail: 'ccc',
    note: 'chipichipichapachapa',
    completed: false,
  });

  return taskListInit;
}
