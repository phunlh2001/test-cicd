import { cleanup, render, screen } from '@testing-library/react'
import Todo from '../components/Todo'

afterAll(() => {
  cleanup()
})

test('should render completed todo', () => {
  const todo = { id: 1, title: 'wash dishes', completed: true }
  render(<Todo {...todo} />)
  const element = screen.getByTestId('todo-1')
  expect(element).toBeInTheDocument()
  expect(element).toHaveTextContent('wash dishes')
  expect(element).toContainHTML('<strike><h1>wash dishes</h1></strike>')
})

test('should render non-completed todo', () => {
  const todo = { id: 2, title: 'make dinner', completed: false }
  render(<Todo {...todo} />)
  const element = screen.getByTestId('todo-2')
  expect(element).toBeInTheDocument()
  expect(element).toHaveTextContent('make dinner')
  expect(element).not.toContainHTML('<strike>')
})
