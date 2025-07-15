import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { Todo } from './types/Todo';
import TodoInput from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (text: string) => {
      const newTodo: Todo = {
        id:  crypto.randomUUID(),
        text,
        completed: false,
      }
    }

    const handleToggle = (id: string)=>
    {
      setTodos(prev => 
        prev.map(todo =>
          todo.id === id ? {...todo, completed: !todo.completed}: todo
        )
      );
    };


  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput onAdd={handleAddTodo}/>
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  );
}

export default App
