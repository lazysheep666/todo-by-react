import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.props.onToggleTodo()
  }

  handleDelete() {
    this.props.onDeleteTodo()
  }

  render() {
    return (
      <li className="todo">
        <span className={this.props.todo.isCompleted ? 'todo-name completed' : 'todo-name'}
          onClick={this.handleToggle}>
          {this.props.todo.name}
        </span>
        <span className="todo-delete" onClick={this.handleDelete}>X</span>
      </li>
    )
  }
}
Todo.propTypes = {
  todo: PropTypes.object,
  onToggleTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func
}

export default Todo
