import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { TodoInput } from '../TodoInput';

describe('TodoInput', () => {
  it('renders input and button, calls onAdd on submit', async () => {
    const onAdd = vi.fn();
    render(<TodoInput onAdd={onAdd} />);
    const input = screen.getByPlaceholderText(/enter new task/i);
    await userEvent.type(input, 'Test Task');
    await userEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(onAdd).toHaveBeenCalledWith('Test Task');
  });
});
