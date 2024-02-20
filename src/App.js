import React from 'react'
import Todo from './components/Todo'

function App() {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'make dinner', completed: true },
  ]
  return (
    <div className="App">
      {todos.map((todo) => (
        <Todo {...todo} />
      ))}
    </div>
  )
}

export default App
