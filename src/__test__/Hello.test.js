import { render, screen } from '@testing-library/react'
import Hello from '../components/Hello'

test('render hello component', () => {
  render(<Hello />)
  const element = screen.getByTestId('hello')
  expect(element).toBeInTheDocument()
  expect(element).toHaveTextContent('Hello World, this is a component')
})
