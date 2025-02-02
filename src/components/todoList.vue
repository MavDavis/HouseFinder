<script lang="ts" setup>
import type Todo from '@/Types/Todo';
const emit = defineEmits();

  const props = defineProps({
    todo: {
      type: Array<Todo>,
        required: true,
    },
  });
  const completeTodo = (id: number) => {
    emit('complete-todo', id);
  }
  const deleteTodo = (id: number) => {
    emit('delete-todo', id);
  }
</script>

<template>
    <ul id='todo-list'>
        <li class='todo-item' v-for="item in todo" :key="item.id">
            <span class='task-text' :class="[item.done ? 'strike-through':'']">{{ item.value }}</span>
            <button class='complete-button' @click="completeTodo(item.id)">Complete</button>
            <button class='delete-button'@click="deleteTodo(item.id)">Delete</button>
        </li>

    </ul>
</template>
<style>
.strike-through{
    text-decoration: line-through;
    opacity: 0.4;
}
</style>