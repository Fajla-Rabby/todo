// types/Todo.ts
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// components/TodoInput.tsx
interface TodoInputProps {
  onAdd(todoText: string): void;
}

```mermaid
flowchart TD
  A[App (todos: Todo[] in state)]
  B[TodoInput<br/>onAdd(todoText)]
  C[TodoList<br/>todos, onToggle]

  B -- "onAdd(todoText)" --> A
  A -- "todos" --> C
  C -- "onToggle(id)" --> A
```