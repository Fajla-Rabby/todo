import React from 'react';
import type { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';
// import { Todo } from '../types/todo';
// import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  if (!todos.length) return <p>No tasks yet.</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
};
