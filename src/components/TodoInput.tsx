import { useState, type FormEvent } from "react";
// import { TodoInputProps } from '../types/Todo.ts';

interface TodoInputProps {
  onAdd(todoText: string): void;
}


export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim()); 
    
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoInput;