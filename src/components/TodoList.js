import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.js'

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, index) => <Todo
        todo={todo}
        key={todo.name}
        onToggleTodo={props.onToggleTodo.bind(null, index)}
        onDeleteTodo={props.onDeleteTodo.bind(null, index)}/>)}
    </ul>
  )
}
TodoList.propTypes = {
  todos: PropTypes.array,
  onToggleTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func
}

export default TodoList
