import React from 'react'

function Todo({ id, title, completed }) {
  const h1 = <h1>{title}</h1>
  const text = completed ? <strike>{h1}</strike> : h1
  return <div data-testid={`todo-${id}`}>{text}</div>
}

export default Todo
