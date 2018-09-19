import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
class Todo extends PureComponent {
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
    const className = cn('todo-name', {'completed': this.props.todo.isCompleted})
    return (
      <li className="todo">
        <span className={className}
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
