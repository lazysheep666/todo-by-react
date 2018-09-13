import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCompelte = this.handleCompelte.bind(this)
  }

  handleCompelte() {
    this.props.onCompleteTodo()
  }

  handleDelete() {
    this.props.onDeleteTodo()
  }

  render() {
    return (
      <li>
        {this.props.todo.name}
        <button onClick={this.handleDelete}>X</button>
      </li>
    )
  }
}
Todo.propTypes = {
  todo: PropTypes.object,
  onCompleteTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func
}

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => <Todo
        todo={todo}
        key={todo.name}
        onCompleteTodo={props.onCompleteTodo.bind(null, index)}
        onDeleteTodo={props.onDeleteTodo.bind(null, index)}/>)}
    </ul>
  )
}
TodoList.propTypes = {
  todos: PropTypes.array,
  onCompleteTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func
}

export default TodoList
