import { expect, test } from 'vitest';
import { TodoList } from './TodoList';

test('should handle adding a new todo item', () => {
  // Test setup
  const todoList = new TodoList();

  // Action
  todoList.addItem('Buy groceries');

  // Assertion
  expect(todoList.items.length).toBe(1);
  expect(todoList.items[0].value).toBe('Buy groceries');
});