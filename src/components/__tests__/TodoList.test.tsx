import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { TodoList } from "../TodoList";

const todos = [
  { id: '1', text: 'Buy milk', completed: false },
  { id: '2', text: 'Study TS', completed: true },
];

test('renders todos', () => {
  render(<TodoList todos={todos} onToggle={vi.fn()} />);
  expect(screen.getByText(/Buy milk/i)).toBeInTheDocument();
  expect(screen.getByText(/Study TS/i)).toBeInTheDocument();
});
