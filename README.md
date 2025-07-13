
```mermaid
flowchart TD
  A[App (todos: Todo[] in state)]
  B[TodoInput<br/>onAdd(todoText)]
  C[TodoList<br/>todos, onToggle]

  B -- "onAdd(todoText)" --> A
  A -- "todos" --> C
  C -- "onToggle(id)" --> A
```