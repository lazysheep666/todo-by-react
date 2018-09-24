import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.js'

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.length === 0 ? <li className="none todo">none</li> : ''}
      {props.todos.map((todo, index) => <Todo
        todo={todo}
        key={todo.text}
        onToggleTodo={props.toggleTodo.bind(null, index)}
        onDeleteTodo={props.deleteTodo.bind(null, index)}/>)}
    </ul>
  )
}
TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}

export default TodoList
