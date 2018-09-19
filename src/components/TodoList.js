import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.js'

function TodoList(props) {
  const todos = props.todos.filter((todo) => {
    if (props.curFilter === 'All') {
      return true
    } else if (props.curFilter === 'Completed') {
      return todo.isCompleted
    } else {
      return !todo.isCompleted
    }
  })

  return (
    <ul className="todo-list">
      {todos.length === 0 ? <li className="none todo">none</li> : ''}
      {todos.map((todo, index) => <Todo
        todo={todo}
        key={todo.name}
        onToggleTodo={props.onToggleTodo.bind(null, index)}
        onDeleteTodo={props.onDeleteTodo.bind(null, index)}/>)}
    </ul>
  )
}
TodoList.propTypes = {
  curFilter: PropTypes.string.isRequired,
  todos: PropTypes.array,
  onToggleTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func
}

export default TodoList
