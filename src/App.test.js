import { screen } from '@testing-library/react';
import App from './App';

test('renders add todo items', () => {
  renderWithRedux(<App />);
  const addTodos = screen.getByText(/start by adding todos/i);
  expect(addTodos).toBeInTheDocument();
})
test('todo input is in document', () => {
  renderWithRedux(<App />);
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  expect(todoInput).toBeInTheDocument()
})
test('todo input should be empty', () => {
  renderWithRedux(<App />);
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  expect(todoInput.value).toBe('')
})
test('todo submit is in document', () => {
  renderWithRedux(<App />);
  const todoInput = screen.getByText(/submit/i);
  expect(todoInput).toBeInTheDocument()
})
test('can enter a todo into the todo input', () => {
  renderWithRedux(<App />);
  const todo = 'Wash my car';
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  todoInput.value = todo
  expect(todoInput.value).toEqual(todo)
})

